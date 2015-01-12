var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "<h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
    result = "<ol>"
    for(var i = 0; i < arrayOfText.length; i++)
    {
    	result += "<li>" + arrayOfText[i] + "</li>"
    }
    result += "</ol>"
    return result

}

lib.generateUnorderedList = function(arrayOfText) {
    result = "<ul>"
    for(var i = 0; i < arrayOfText.length; i++)
    {
    	result += "<li>" + arrayOfText[i] + "</li>"
    }
    result += "</ul>"
    return result
}

lib.generateTableRow = function (arrayOfText) {
    result = "<table><tr>"
    for(var i = 0; i < arrayOfText.length; i++)
    {
    	result += "<td>" + arrayOfText[i] + "</td>"
    }
    result += "</tr></table>"
    return result
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    result = "<table>"
    for(var i = 0; i < twoDimensionalArrayOfText.length; i++)
    {
    	result += "<tr>"
    	for(var j = 0; j < twoDimensionalArrayOfText[i].length; j++)
    	{
    		result += "<td>" + twoDimensionalArrayOfText[i][j] + "</td>"
    	}
    	result += "</tr>"
    }
    result += "</table>"
    return result
}

lib.generateHyperLink = function(url, text) {
    return "<a href = \"" + url + "\">" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "<input type =\"text\" name=\"" + name + "\">"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label + "</label>" + lib.generateFormTextField(name)
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    result = "<select>\n"
    for(var i = 0; i < arrayOfText.length; i++)
    {
    	result += "\t<option value=\"" + arrayOfValues[i] + "\">" + arrayOfText[i] + "</option>\n"
    }
    result += "</select>"
    return result
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "<iframe width=\"" + width  + "\" height=\"" + height + "\" src=\"//www.youtube.com/embed/" + videoId + " " + allowfullscreen + "></iframe>"
}

module.exports = lib