// Auto-respond to new issues and pull requests
on('issues.opened', 'pull_request.opened')
  .comment('Thanks for your contribution! Expect a reply within 48 hours.')
  .label('triage');
