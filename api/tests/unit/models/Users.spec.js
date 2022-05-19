const User = require("../../../models/Users");


describe("User", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it resolves with user on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [{}, {}, {}] });
      const all = await User.all;
      expect(all).toHaveLength(3);
    });
  });

  describe("findById", () => {
    test("it resolves with user on successful db query", async () => {
      let userData = { id: 1, name: "Test User" };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });
      const result = await User.findUserById(1);
      expect(result).toBeInstanceOf(User);
    });
  });

  describe("create", () => {
    test("it resolves with user on successful db query", async () => {
      let userData = {
        user_id: 1,
        username: "New User",
        email: "new@user.com",
        password: "Password1",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });
      const result = await User.create(userData);
      console.log(result);
      expect(result).toBeInstanceOf(User);
    });
  });
});
