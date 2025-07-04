const statements = [
  {
    input: 'Justin.location',
    return: '"San Jose, CA"',
  },
  {
    input: 'Justin.contact',
    return:
      '["<a href="mailto:j.chi2241@gmail.com">j.chi2241@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/justin-chi-64b12b37">LinkedIn</a>", "<a rel="noopener" href="https://github.com/jchi2241">github</a>"]',
  },
  {
    input: 'Justin.resume',
    return:
      '"<a rel="noopener" href="/justinchi_resume.pdf" target="_blank">justinchi.pdf</a>"',
  },
  {
    input: 'Justin.interests',
    return: '["design", "basketball", "cooking", "traveling"]',
  },
  {
    input: 'Justin.education',
    return:
      '"B.Sc. Structural Engineering - University of California, San Diego"',
  },
  {
    input: 'Justin.languages',
    return: '["Typescript", "React", "Go", "Python"]',
  },
];

export default statements;
