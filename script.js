const billingToggle = document.getElementById("billingToggle");
const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

const amounts = document.querySelectorAll(".amount");
const billingNotes = document.querySelectorAll(".billing-note");

// Monthly and yearly price toggle
billingToggle.addEventListener("change", function () {
  const isYearly = billingToggle.checked;

  amounts.forEach(function (amount) {
    amount.textContent = isYearly
      ? amount.dataset.yearly
      : amount.dataset.monthly;
  });

  billingNotes.forEach(function (note) {
    note.textContent = isYearly
      ? "Billed annually"
      : "Billed monthly";
  });

  monthlyLabel.classList.toggle("active", !isYearly);
  yearlyLabel.classList.toggle("active", isYearly);
});

// Plan selection
const planButtons = document.querySelectorAll("[data-plan]");
const selectedPlan = document.getElementById("selectedPlan");

planButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const planName = button.dataset.plan;

    selectedPlan.textContent =
      "You selected the " + planName + " plan. Contact us to learn more.";

    document.getElementById("contactButton").textContent =
      "Contact Us About " + planName;

    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Current year in footer
document.getElementById("year").textContent =
  new Date().getFullYear();