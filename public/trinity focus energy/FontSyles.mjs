const sheet = new CSSStyleSheet();

// replace all styles synchronously:
sheet.replaceSync('a { color: red; }');

// replace all styles:
sheet.replace('a { color: blue; }')
  .then(() => {
    console.log('Styles replaced');
  })
  .catch(err => {
    console.error('Failed to replace styles:', err);
  });

// Any @import rules are ignored.
// Both of these still apply the a{} style:
sheet.replaceSync('@import url("styles.css"); a { color: red; }');
sheet.replace('@import url("styles.css"); a { color: red; }');
// Console warning: "@import rules are not allowed here..."

