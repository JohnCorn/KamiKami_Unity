var canJump : boolean = true;
var Jump = 100.0;

function Update ()
{
if(Input.GetKeyDown("space") && canJump)
{
this.rigidbody2D.AddForce(Vector3.up * Jump * Time.deltaTime);
//this.rigidbody2D.velocity.y += Jump; //jump
canJump = false; //Disable jumping until landing
print ("Jump");

}
else if (Input.GetKeyDown (KeyCode.JoystickButton1) && canJump)
{
this.rigidbody2D.velocity.y += 3.75; //jump
canJump = false; //Disable jumping until landing
print ("Jump");

}
}
function OnCollisionEnter2D(other : Collision2D){

if(other.transform.tag == "Ground"){ //If the player lands on ground
    canJump = true; //allow him to jump again
}
}