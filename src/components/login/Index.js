import { useForm, Controller } from "react-hook-form";
import useUser from "../../hook/useUser";
import { useLocation } from "wouter";
import { useEffect } from "react";

import { Form, ButtonToolbar, Button, Panel, FlexboxGrid } from "rsuite";

export default function Login() {
  const { login, isLogged, isLoginHasError, isLoginLoading } = useUser();
  const [, navigate] = useLocation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "johnnnn",
      password: "",
    },
  });

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const onSubmit = (data) => {
    const { username, password } = data;
    login({ username, password });
  };

  return (
    <>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form fluid onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.ControlLabel>Username or email address</Form.ControlLabel>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Control {...field} name="username" />
                  )}
                />
                {errors.username && <span>Username is required</span>}
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      name="password"
                      type="password"
                      autoComplete="off"
                    />
                  )}
                />
                {errors.password && <span>Password is required</span>}
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button type="submit" appearance="primary">
                    {isLoginLoading ? "Cargando ..." : "Sign in"}
                  </Button>

                  <Button appearance="link">Forgot password?</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>

      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          {isLoginHasError ? "Las credenciales no son correctas" : ""}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}
