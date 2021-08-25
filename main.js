var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://github.com/NahomDoesProgramming/images/blob/main/Drawing%20(1).png?raw=true", "https://github.com/NahomDoesProgramming/images/blob/main/Drawing.sketchpad.png?raw=true" , "https://github.com/NahomDoesProgramming/images/blob/main/Drawing.sketchpad%20(3).png?raw=true", "https://github.com/NahomDoesProgramming/images/blob/main/Drawing.sketchpad%20(2).png?raw=true", "https://github.com/NahomDoesProgramming/images/blob/main/Drawing.sketchpad%20(1).png?raw=true"];
var names = ["Family", "Me", "Sabela", "Mommy", "Daddy", "Fnote"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
