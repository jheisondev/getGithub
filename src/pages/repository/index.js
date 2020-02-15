import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { Loading } from './styles';

function Repository({ match }) {
  const repoName = decodeURIComponent(match.params.repo);

  const [repo, setRepo] = useState({});
  const [issuesRepo, setIssuesRepo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRepoIssues() {
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    setRepo(repository.data);
    setIssuesRepo(issues.data);
    setLoading(false);
  }

  return (
    <>
      {loading && (
        <Loading loading={loading} render={getRepoIssues()}>
          <FaSpinner />
        </Loading>
      )}
    </>
  );
}

export default Repository;
