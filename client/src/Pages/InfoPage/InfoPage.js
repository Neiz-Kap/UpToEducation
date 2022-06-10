import React from "react";

const InfoPage = () => {
  return (
    <section className="constent__section">
      <h1>Информация о проекте</h1>
      Дипломный проект разработан Мехедовым Иваном
      <br />
      <div className="mt-3 d-flex justify-content-around">
        <div>
          {" "}
          <img
            style={{ maxWidth: "300px" }}
            src="https://yt3.ggpht.com/6rdguYgmTyJaVGx3jipNbJQs6gANJxvCc7idTGjp7-o58OhC-BLNmkM5Xtil5GWU_IxzBvZM7K2YdA=s400-nd-v1-rwa"
            alt=""
          />
          <p>
            Тут тутор:{" "}
            <a href="https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog/community?lb=Ugkx-aT06A6oLVHQ1RBD-kS6C_hZpua4JxcB">
              Link
            </a>{" "}
          </p>
        </div>
        <div>
          <img
            style={{ maxWidth: "300px" }}
            src="https://yt3.ggpht.com/GnU-iZntV5DifF9rV7fH8PdG8DVx6I2NvSDhGUemwtOR_Nn-zsBjJ99-1yQmafocQIGxwdHdKp-q=s350-nd-v1-rwa"
            alt=""
          />
          <p>
            Тут тутор:{" "}
            <a href="https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog/community?lb=Ugkxgi904TwZ2lafgK1d0hZ-aNXvaCPD7ZAo">
              Link
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
