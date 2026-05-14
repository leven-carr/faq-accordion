// Event handler
function expandHandler(e) {
  const icon = e.currentTarget.firstElementChild.children[1];
  const answer = e.currentTarget.children[1];

  // Toggle plus/minus class on icon
  icon.classList.toggle("fa-circle-plus");
  icon.classList.toggle("fa-circle-minus");

  // Toggle answer visibility
  answer.classList.toggle("expand");
}

// Event listeners
document.querySelectorAll(".faq-item").forEach((faq) => {
  faq.addEventListener("click", expandHandler);

  faq.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      expandHandler(e);
    }
  });
});
