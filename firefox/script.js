const data = {
  summarize: "sum",
  extract_wisdom: "ext",
  analyze_claims: "ana",
}

document.querySelectorAll(".pattern").forEach((pattern) => {
  pattern.addEventListener("click", (e) => {
    navigator.clipboard.writeText(
      data[e.target.textContent.toLowerCase().replaceAll(" ", "_")]
    )
  })
})
