import reducer, { INITIAL_STATE } from "~/store/modules/techs/reducer";
import * as Techs from "~/store/modules/techs/actions";

describe("Techs reducer", () => {
  it("ADD_TECH", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("NodeJS"));
    expect(state).toStrictEqual(["NodeJS"]);
  });

  it("DEFAULT", () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
