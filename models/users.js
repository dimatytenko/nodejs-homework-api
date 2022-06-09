const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { Role } = require("../libs/constants");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: {
        values: Object.values(Role),
        message: "Invalid role",
      },
      default: "user",
    },
  }

  // {
  //   versionKey: false,
  //   timestamps: true,
  // }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(6);
    console.log("salt---", salt);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.isValidPassword = async function (
  password
) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = { User };
