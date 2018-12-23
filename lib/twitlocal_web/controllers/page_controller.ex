defmodule TwitlocalWeb.PageController do
  use TwitlocalWeb, :controller

  alias Twitlocal.Chats

    def index(conn, _params) do
      messages = Chats.list_messages()
      render conn, "index.html", messages: messages
    end




  end
