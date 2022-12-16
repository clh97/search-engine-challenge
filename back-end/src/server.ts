import app from "./app";

const PORT = process.env.PORT || 3001;

const init = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
  }
};

init();
