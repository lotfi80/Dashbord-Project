export const getDesignsTockens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        }
      : {
          // palette values for light mode
        }),
  },
});
