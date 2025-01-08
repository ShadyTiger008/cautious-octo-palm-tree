function App() {
  const changeBackgroundColor = () => {
    // Check if `chrome` is available
    if (typeof chrome !== "undefined" && chrome.tabs && chrome.scripting) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Ensure `tabs[0].id` is defined
        if (tabs[0]?.id) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id }, // `tabId` is now guaranteed to be a number
            func: () => {
              document.body.style.backgroundColor = "lightblue";
            },
          });
        } else {
          console.error("No active tab found or tab ID is undefined.");
        }
      });
    } else {
      console.warn("Chrome API is not available.");
    }
  };

  return (
    <div style={{ padding: "20px", width: "300px", textAlign: "center" }}>
      <h1>My Vite Extension</h1>
      <p>
        Click the button to change the background color of the current page.
      </p>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Change Background
      </button>
    </div>
  );
}

export default App;
