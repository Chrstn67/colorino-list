import React from "react";
import "./ColorList.scss"; // Import du fichier SCSS

const ColorList = () => {
  const generateColorList = () => {
    const colors = [];

    for (let r = 0; r <= 255; r += 6) {
      for (let g = 0; g <= 255; g += 6) {
        for (let b = 0; b <= 255; b += 6) {
          const rgbaColor = `rgba(${r}, ${g}, ${b}, 1)`; // Paramètre alpha fixé à 1

          colors.push(
            <div
              key={rgbaColor}
              className="color-box" // Utilisation de la classe définie dans le fichier SCSS
              style={{
                backgroundColor: rgbaColor,
              }}
            >
              <p>{rgbaColor}</p>
            </div>
          );
        }
      }
    }

    return colors;
  };

  return (
    <>
      <h2>Codes RGB</h2>{" "}
      <div className="color-list-container">{generateColorList()}</div>
    </>
  );
};

export default ColorList;
