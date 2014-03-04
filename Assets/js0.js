

//旋转移动速度
var Speed = 50;

//控制对象
var Control;

function Update()
{
  //得到控制对象
  Control = GetComponent(js1); 

  //判断按键 

  if(Input.GetKey(KeyCode.W))
  {
  	    //前进
   		Control.ForWard();
   		

  }else if(Input.GetKey(KeyCode.S))	
  {
		//后退
  		Control.Back();
  }

    if(Input.GetKey(KeyCode.A))
  {
  	    //前左
   		Control.GLeft();

  }else if(Input.GetKey(KeyCode.D))	
  {
		//后右
  		Control.GRight();
  }

  if(Input.GetKey(KeyCode.Q))
  {
  	//左旋转

    Control.leftRotate(Vector3.up *Time.deltaTime * -Speed);

  }else if(Input.GetKey(KeyCode.E))
  {
    //右旋转
  	Control.RightRotate(Vector3.up *Time.deltaTime * Speed);

  }

}