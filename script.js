const setConfirmBox = (message, callback) => {
  var confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");
  document.body.appendChild(confirmBox);

  var messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.textContent = message;
  confirmBox.appendChild(messageBox);

  var buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");
  messageBox.appendChild(buttonBox);

  const closeButton = () => {
    document.body.removeChild(confirmBox);
  };

  var yesButton = document.createElement("button");
  yesButton.classList.add("yes-button");
  yesButton.textContent = "Yes";
  buttonBox.appendChild(yesButton);
  yesButton.addEventListener("click", () => {
    callback(true);
    closeButton();
  });

  var noButton = document.createElement("button");
  noButton.classList.add("no-button");
  noButton.textContent = "No";
  buttonBox.appendChild(noButton);
  noButton.addEventListener("click", () => {
    callback(false);
    closeButton();
  });
};

document.querySelector(".openButton").addEventListener("click", () => {
  setConfirmBox("hello this is practice Way", (result) => {
    if (result) {
      console.log("You Pressed Yes");
    } else {
      console.log("You Pressed No");
    }
  });
});
