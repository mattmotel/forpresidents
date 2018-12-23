defmodule Twitlocal.Repo do
  use Ecto.Repo,
    otp_app: :twitlocal,
    adapter: Ecto.Adapters.Postgres
end
