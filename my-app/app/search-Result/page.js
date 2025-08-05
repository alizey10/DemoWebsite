import { Suspense } from "react";
import Products from "./prodct";

export default function SearchResultPage() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Search Results</h2>

    
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading search results...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}
