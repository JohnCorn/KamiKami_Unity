var runSpeed = 10.0;

 

function Update(){

 

    //Movement buttons are pressed

    if(Input.GetAxis("Horizontal")){

    

        //Set some variables for movement

        var moveSpeed : float = Input.GetAxis("Horizontal")*runSpeed *.25;

 

        //Move our character

        transform.Translate(moveSpeed, 0, 0);


    }

 

}