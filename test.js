var debug = require('debug')('test')
var html = require('./lib.js')

// Test data
var arrayOfValues = ['id1','id2','id3','id4']
var arrayOfText = ['adam','ben','cindy','david']
var twoDimensionalArrayOfText = [['1','2','3','4'], ['amy','ben','cindy','david']]

var result

result = html.generateHeading1('heading1')
debug(result)
console.log(result)
// --> <h1>heading1</h1>

result = html.generateHeading(2, 'heading2')
debug(result)
console.log(result)
// --> <h2>heading2</h2>

result = html.generateHeading(3, 'heading3')
debug(result)
console.log(result)
// --> <h3>heading3</h3>

result = html.generateOrderedList(arrayOfText)
debug(result)
console.log(result)
// --> <ol><li>amy</li><li>ben</li><li>cindy</li><li>david</li></uo>

result = html.generateUnorderedList(arrayOfText)
debug(result)
console.log(result)
// --> <ul><li>amy</li><li>ben</li><li>cindy</li><li>david</li></ul>

result = html.generateTableRow(arrayOfText)
debug(result)
console.log(result)
// --> <tr><td>amy</td><td>ben</td><td>cindy</td><td>david</td></tr>

result = html.generateTable(twoDimensionalArrayOfText)
debug(result)
console.log(result)
// --> <td>amy</td><td>ben</td><td>cindy</td><td>david</td>

result = html.generateHyperLink('http://youtube.com', 'YouTube')
debug(result)
console.log(result)
// --> <a href="http://youtube.com">YouTube</a>

result = html.generateFormTextField('firstName')
debug(result)
console.log(result)
// --> <input type="text" name="firstName">


result = html.generateFormTextFieldWithLabel('firstName', 'First name')
debug(result)
console.log(result)
// --> <label>First name</label> <input type="text" name="firstName">

result = html.generateDropdownList(['volvo','saab','mercedes','audi'], ['Volvo','Saab','Mercedes','Audi'])
debug(result)
console.log(result)
// --> 
// <select>
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>


result = html.generateYoutubeVideoEmbeddableFrame(560, 315, '9bZkp7q19f0', true)
debug(result)
//console.log(result)
// --> <iframe width="560" height="315" src="//www.youtube.com/embed/9bZkp7q19f0" allowfullscreen></iframe>
