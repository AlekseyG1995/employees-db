export const validationRules = {
  firstName: {
    required: {
      message: "First name is required",
      value: true,
    },
  },
  lastName: {
    required: {
      message: "Last name is required",
      value: true,
    },
  },
  birthday: {
    required: {
      message: "Day of birthday is required",
      value: true,
    },
  },
  role: {
    required: {
      message: "role is required",
      value: true,
    },
  },
  phone: {
    required: {
      message: "Phone number is required",
      value: true,
    },
    pattern: {
      value: /\+7\s*\([0-9]{3}\)\s*[0-9]{3}-[0-9]{4}/g,
      message: "Number must be format +7 (xxx) xxx-xxxx",
    },
  },
}
