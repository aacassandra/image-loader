const loadImage = imageUrl => {
  return new Promise(resolve => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      resolve();
    };
  });
};

const loadImages = async (objects = [], column = []) => {
  const promises1 = objects.map(async object => {
    const promises2 = Object.keys(object).map(async key => {
      const promises3 = column.map(async col => {
        if (col === key) {
          await loadImage(object[col]);
        }
      });

      await Promise.all(promises3);
    });
    await Promise.all(promises2);
  });
  await Promise.all(promises1);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
export default loadImages;
