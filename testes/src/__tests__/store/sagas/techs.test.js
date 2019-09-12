import { runSaga } from "redux-saga";
import MockAdapter from "axios-mock-adapter";

import { getTechs } from "~/store/modules/techs/sagas";
import {
  getTechsSuccess,
  getTechsFailure
} from "~/store/modules/techs/actions";

import api from "~/services/api";

const apiMock = new MockAdapter(api);

describe("Techs saga", () => {
  it("should be able to fetch techs", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(200, ["NodeJS"]);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(["NodeJS"]));
  });

  it("should fail when api were down", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(500);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});
