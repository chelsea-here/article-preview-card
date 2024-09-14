import "./ShareButton.css";

export default function ShareButton({ isActive, onShare, children }) {
  return (
    <>
      <button
        onClick={onShare} /* prop passed in from parent */
        className={`shareButton ${isActive ? "active" : "notActive"}`}
        aria-label="Share Button"
      >
        <svg
          id="shareIcon"
          alt="arrow icon, click to share"
          className={`shareIcon ${isActive ? "active" : "notActive"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
        >
          <path
            id="sharePath"
            fill="#000000"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </button>
      {children}
    </>
  );
}
