/* "No background from styles on post" by Wersjon [1.5_03]*/
for(var i = 0; i < document.getElementsByClassName("ipsContained").length; i++)
{
	for(var i2 = 0; i2 < document.getElementsByClassName("ipsContained")[i].getElementsByTagName("span").length; i2++)
	{
		if(document.getElementsByClassName("ipsContained")[i].getElementsByTagName("span")[i2].style.backgroundColor == "rgb(255, 255, 255)" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("span")[i2].style.backgroundColor == "#FFFFFF" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("span")[i2].style.backgroundColor == "rgb(45, 48, 53)")
		{
			document.getElementsByClassName("ipsContained")[i].getElementsByTagName("span")[i2].style.setProperty("background-color", "rgba(0, 0, 0, 0)");
		}
	}
	for(var i2 = 0; i2 < document.getElementsByClassName("ipsContained")[i].getElementsByTagName("strong").length; i2++)
	{
		if(document.getElementsByClassName("ipsContained")[i].getElementsByTagName("strong")[i2].style.backgroundColor == "rgb(255, 255, 255)" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("strong")[i2].style.backgroundColor == "#FFFFFF" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("strong")[i2].style.backgroundColor == "rgb(45, 48, 53)")
		{
			document.getElementsByClassName("ipsContained")[i].getElementsByTagName("strong")[i2].style.setProperty("background-color", "rgba(0, 0, 0, 0)");
		}
	}
	for(var i2 = 0; i2 < document.getElementsByClassName("ipsContained")[i].getElementsByTagName("em").length; i2++)
	{
		if(document.getElementsByClassName("ipsContained")[i].getElementsByTagName("em")[i2].style.backgroundColor == "rgb(255, 255, 255)" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("em")[i2].style.backgroundColor == "#FFFFFF" || document.getElementsByClassName("ipsContained")[i].getElementsByTagName("em")[i2].style.backgroundColor == "rgb(45, 48, 53)")
		{
			document.getElementsByClassName("ipsContained")[i].getElementsByTagName("em")[i2].style.setProperty("background-color", "rgba(0, 0, 0, 0)");
		}
	}
}