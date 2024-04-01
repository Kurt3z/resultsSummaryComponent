"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const detailsList = document.querySelector(".details");

      data.forEach(result => {
        const htmlEl = `
        <li class="detail">
            <div>
                <img src="${result.icon}" alt="${result.category} icon" />
                <span>${result.category}</span>
            </div>
            <span><span class="detail-result">${result.score}</span> / 100</span>
        </li>
        `;
        detailsList.innerHTML += htmlEl;
      });
    });
});
