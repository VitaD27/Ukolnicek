import ChangePassword from "./containers/ChangePassword";

<AuthenticatedRoute
  path="/settings/password"
  exact
  component={ChangePassword}
  props={childProps}
/>