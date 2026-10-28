const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm instanceof HTMLFormElement && formStatus instanceof HTMLElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submission = {
      ...Object.fromEntries(new FormData(contactForm).entries()),
      submittedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        "careerGoalsContactSubmission",
        JSON.stringify(submission),
      );
    } catch (error) {
      formStatus.textContent =
        "Error saving submission.";
      formStatus.hidden = false;
      console.error("Could not save contact form submission to local storage.", error);
      return;
    }

    formStatus.textContent = "Thank you!";
    formStatus.hidden = false;
    contactForm.remove();
  });
}