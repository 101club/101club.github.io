function checkAge() {
  const allowed = confirm("This site contains adult content. Are you 18 or older?");
  if (!allowed) {
    document.body.innerHTML = "<h1>Access Denied</h1><p>You must be 18+ to view this site.</p>";
  }
}