module.exports = () => ({
  users: [
    {
      id: 1,
      email: "admin@example.com",
      password: "$2a$10$EogrW/8S5g7YwYWWosM6LedqixXUej36Pzr22TOlvdSHeH9px/5JG", //password
      firstname: "Firstname",
      lastname: "Lastname",
      permissions: [
        "canAccessTodoListPage",
        "canAccessTodoEditPage",
        "canAccessDropApplication",
      ],
    },
    {
      id: 2,
      email: "user@example.com",
      password: "$2a$10$EogrW/8S5g7YwYWWosM6LedqixXUej36Pzr22TOlvdSHeH9px/5JG", //password
      firstname: "Firstname",
      lastname: "Lastname",
      permissions: ["canAccessTodoListPage"],
    },
  ],
})
