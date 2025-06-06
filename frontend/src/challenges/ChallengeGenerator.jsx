import React from "react";
import { useState, useEffect } from "react";
import MCQChallenge from "./MCQChallenge";
import { useApi } from "../utils/api";

const ChallengeGenerator = () => {
  const [challenge, setChallenges] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [quota, setQuota] = useState(null);
  const { makeRequest } = useApi();

  useEffect(() => {
    fetchQuota();
  }, []);

  const fetchQuota = async () => {
    try {
      const data = await makeRequest("/api/quota");
      setQuota(data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateChallenge = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await makeRequest("/api/generate-challenge", {
        method: "POST",
        body: JSON.stringify({ difficulty }),
      });

      setChallenges(data);
      fetchQuota();
    } catch (error) {
      setError(error.message || "Request to generate challenge failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getNextRestTime = () => {
    if (!quota?.last_rest_date) return null;

    const resetDate = new Date(quota.last_reset_date);
    resetDate.setHours(resetDate.getHours() + 24);
    return resetDate;
  };

  return (
    <div className="challenge-container" role="main">
      <h2>Code Challenge Generator</h2>
      <div className="quota-display" role="status">
        <p>Challenges remaining for today: {quota?.quota_remaining || 0}</p>
        {quota?.quota_remaining === 0 && (
          <p>Next rest: {getNextRestTime()?.toLocaleString()}</p>
        )}
      </div>

      <div className="difficulty-selector" aria-label="Select difficulty level">
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          disabled={isLoading}
          aria-live="polite"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <button
        onClick={generateChallenge}
        disabled={false}
        // disabled={isLoading || (quota && quota?.quota_remaining === 0)}
        aria-busy={isLoading}
        aria-label="Generate a new coding challenge"
        className="generate-button"
      >
        {isLoading ? "Generating..." : "Generate Challenge"}
      </button>

      {error && (
        <div className="error-message" role="alert">
          <p>Error: {error}</p>
        </div>
      )}

      {challenge && <MCQChallenge challenge={challenge} />}
    </div>
  );
};

export default ChallengeGenerator;
