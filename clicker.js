


var respect = 0;
var x;

/***** DODAWANIE/ODEJMOWANIE DODATKI *****/
function plus(){
        res = respect++;
    var i;
    for(i=0;i<=1000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus').attr("disabled", true);
       
    }
    function plus2(){
        res = respect++;
    var i;
    for(i=0;i<=2000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus2').attr("disabled", true);
        $( "#img11" ).show( "fast" );
       
    }
    function plus3(){
        res = respect++;
    var i;
    for(i=0;i<=5000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus3').attr("disabled", true);
        $( "#img12" ).show( "fast" );
       
    }
    function plus4(){
        res = respect++;
    var i;
    for(i=0;i<=10000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus4').attr("disabled", true);
        $( "#img13" ).show( "fast" );
       
    }
    function plus5(){
        res = respect++;
    var i;
    for(i=0;i<=20000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus5').attr("disabled", true);
       
    }
    function plus6(){
        res = respect++;
    var i;
    for(i=0;i<=30000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus6').attr("disabled", true);
       
    }
function plus7(){
        res = respect++;
    var i;
    for(i=0;i<=3000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus7').attr("disabled", true);
       
    }
function plus8(){
        res = respect++;
    var i;
    for(i=0;i<=50000;i++){
        respect++;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#plus8').attr("disabled", true);
    $( "#img14" ).show( "fast" );
       
    }
    function minus1(){
        res = respect++;
    var i;
    for(i=0;i<=10000;i++){
        respect--;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#minus1').attr("disabled", true);
       
    }
    function minus2(){
        res = respect++;
    var i;
    for(i=0;i<=40000;i++){
        respect--;
    }
        
        document.getElementById("aka").innerHTML = res;
        $('#minus2').attr("disabled", true);
       
    }
    
 /******* PODSTAWOWE ******/   
function clic() {
    
var res = respect++;
    
    document.getElementById("aka").innerHTML = res;
    if(res >= 19){
         $( "#start" ).click(function() {
  $( "#razy" ).show( "fast" );
});
    }
    if(res >= 100){
         $( "#start" ).click(function() {
  $( "#razy4" ).show( "fast" );
});
    }
    if(res >= 2000){
         $( "#start" ).click(function() {
  $( "#razy10" ).show( "fast" );
});
    }
    if(res >= 10000){
         $( "#start" ).click(function() {
  $( "#razy40" ).show( "fast" );
});
    }
    if(res >= 200){
         $( "#start" ).click(function() {
  $( "#auto" ).show( "fast" );
});
    }
    if(res >= 300){
         $( "#start" ).click(function() {
  $( "#plus" ).show( "fast" );
});
    }
    if(res >= 3000){
         $( "#start" ).click(function() {
  $( "#plus2" ).show( "fast" );
});
    }
    if(res >= 6000){
         $( "#start" ).click(function() {
  $( "#plus3" ).show( "fast" );
});
    }
    if(res >= 10500){
         $( "#start" ).click(function() {
  $( "#plus4" ).show( "fast" );
});
    }
    if(res >= 50000){
         $( "#start" ).click(function() {
  $( "#plus5" ).show( "fast" );
});
    }
    if(res >= 100000){
         $( "#start" ).click(function() {
  $( "#plus6" ).show( "fast" );
});
    }
    if(res >= 8000){
         $( "#start" ).click(function() {
  $( "#plus7" ).show( "fast" );
});
    }
    if(res >= 300000){
         $( "#start" ).click(function() {
  $( "#plus8" ).show( "fast" );
});
    }
    if(res >= 30000){
         $( "#start" ).click(function() {
  $( "#minus1" ).show( "fast" );
});
    }
    if(res >= 55000){
         $( "#start" ).click(function() {
  $( "#minus2" ).show( "fast" );
});
    }
    
    if( res >= 1500){
       $('#admin').attr("disabled", false);
    }
        else{
            $('#admin').attr("disabled", true);
        }
    if( res >= 2000){
       $('#admin2').attr("disabled", false);
    }
    else{
            $('#admin2').attr("disabled", true);
        }
    if( res >= 3500){
       $('#admin3').attr("disabled", false);
    }
    else{
            $('#admin3').attr("disabled", true);
        }
    if( res >= 5500){
       $('#admin4').attr("disabled", false);
    }
    else{
            $('#admin4').attr("disabled", true);
        }
    if( res >= 10000){
       $('#admin5').attr("disabled", false);
    }
    else{
            $('#admin5').attr("disabled", true);
        }
    if( res >= 15000){
       $('#admin6').attr("disabled", false);
    }
    else{
            $('#admin6').attr("disabled", true);
        }
    if( res >= 25000){
       $('#admin7').attr("disabled", false);
    }
    else{
            $('#admin7').attr("disabled", true);
        }
    if( res >= 40000){
       $('#admin8').attr("disabled", false);
    }
    else{
            $('#admin8').attr("disabled", true);
        }
    if( res >= 60000){
       $('#admin9').attr("disabled", false);
    }
    else{
            $('#admin9').attr("disabled", true);
        }
    if( res >= 90000){
       $('#admin10').attr("disabled", false);
    }
    else{
            $('#admin10').attr("disabled", true);
        }
    if( res >= 1500000){
       $('#admin11').attr("disabled", false);
    }
    else{
            $('#admin11').attr("disabled", true);
        }
    if( res >= 7000){
       $('#sklep1').attr("disabled", false);
    }
    else{
            $('#sklep1').attr("disabled", true);
        }
    if( res >= 1200000){
       $('#sklep2').attr("disabled", false);
    }
    else{
            $('#sklep2').attr("disabled", true);
        }
    if( res >= 32000){
       $('#sklep3').attr("disabled", false);
    }
    else{
            $('#sklep3').attr("disabled", true);
        }
    if( res >= 50000){
       $('#sklep4').attr("disabled", false);
    }
    else{
            $('#sklep4').attr("disabled", true);
        }
    if( res >= 500000){
       $('#sklep5').attr("disabled", false);
    }
    else{
            $('#sklep5').attr("disabled", true);
        }
}
    
    
    
    function clic2(){
       res = respect++;
        respect++;
        document.getElementById("aka").innerHTML = res;
        
        if(res >= 100){
         $( "#razy" ).click(function() {
  $( "#razy4" ).show( "fast" );
});
    }
        if(res >= 2000){
         $( "#razy" ).click(function() {
  $( "#razy10" ).show( "fast" );
});
    }
        if(res >= 10000){
         $( "#razy" ).click(function() {
  $( "#razy40" ).show( "fast" );
});
    }
        if(res >= 200){
         $( "#razy" ).click(function() {
  $( "#auto" ).show( "fast" );
});
    }
        if(res >= 300){
         $( "#razy" ).click(function() {
  $( "#plus" ).show( "fast" );
});
    }
        if(res >= 3000){
         $( "#razy" ).click(function() {
  $( "#plus2" ).show( "fast" );
});
    }
    if(res >= 6000){
         $( "#razy" ).click(function() {
  $( "#plus3" ).show( "fast" );
});
    }
    if(res >= 10500){
         $( "#razy" ).click(function() {
  $( "#plus4" ).show( "fast" );
});
    }
        if(res >= 50000){
         $( "#razy" ).click(function() {
  $( "#plus5" ).show( "fast" );
});
    }
    if(res >= 100000){
         $( "#razy" ).click(function() {
  $( "#plus6" ).show( "fast" );
});
    }
        if(res >= 8000){
         $( "#razy" ).click(function() {
  $( "#plus7" ).show( "fast" );
});
    }
    if(res >= 300000){
         $( "#razy" ).click(function() {
  $( "#plus8" ).show( "fast" );
});
    }
        if(res >= 30000){
         $( "#razy" ).click(function() {
  $( "#minus1" ).show( "fast" );
});
    }
    if(res >= 55000){
         $( "#razy" ).click(function() {
  $( "#minus2" ).show( "fast" );
});
    }
        if( res >= 1500){
       $('#admin').attr("disabled", false);
    }
        else{
            $('#admin').attr("disabled", true);
        }
    if( res >= 2000){
       $('#admin2').attr("disabled", false);
    }
    else{
            $('#admin2').attr("disabled", true);
        }
    if( res >= 3500){
       $('#admin3').attr("disabled", false);
    }
    else{
            $('#admin3').attr("disabled", true);
        }
    if( res >= 5500){
       $('#admin4').attr("disabled", false);
    }
    else{
            $('#admin4').attr("disabled", true);
        }
    if( res >= 10000){
       $('#admin5').attr("disabled", false);
    }
    else{
            $('#admin5').attr("disabled", true);
        }
    if( res >= 15000){
       $('#admin6').attr("disabled", false);
    }
    else{
            $('#admin6').attr("disabled", true);
        }
    if( res >= 25000){
       $('#admin7').attr("disabled", false);
    }
    else{
            $('#admin7').attr("disabled", true);
        }
    if( res >= 40000){
       $('#admin8').attr("disabled", false);
    }
    else{
            $('#admin8').attr("disabled", true);
        }
    if( res >= 60000){
       $('#admin9').attr("disabled", false);
    }
    else{
            $('#admin9').attr("disabled", true);
        }
    if( res >= 90000){
       $('#admin10').attr("disabled", false);
    }
    else{
            $('#admin10').attr("disabled", true);
        }
    if( res >= 1500000){
       $('#admin11').attr("disabled", false);
    }
    else{
            $('#admin11').attr("disabled", true);
        }
        if( res >= 1200000){
       $('#sklep2').attr("disabled", false);
    }
    else{
            $('#sklep2').attr("disabled", true);
        }
        if( res >= 7000){
       $('#sklep1').attr("disabled", false);
    }
    else{
            $('#sklep1').attr("disabled", true);
        }
            if( res >= 32000){
       $('#sklep3').attr("disabled", false);
    }
    else{
            $('#sklep3').attr("disabled", true);
        }
        if( res >= 50000){
       $('#sklep4').attr("disabled", false);
    }
    else{
            $('#sklep4').attr("disabled", true);
        }
        if( res >= 500000){
       $('#sklep5').attr("disabled", false);
    }
    else{
            $('#sklep5').attr("disabled", true);
        }
    }
    
     function clic3(){
       res = respect++;
        respect++;
         respect++;
         respect++;
        document.getElementById("aka").innerHTML = res;
         if(res >= 200){
         $( "#razy4" ).click(function() {
  $( "#auto" ).show( "fast" );
});
    }
         if(res >= 2000){
         $( "#razy4" ).click(function() {
  $( "#razy10" ).show( "fast" );
});
    }
         if(res >= 10000){
         $( "#razy4" ).click(function() {
  $( "#razy40" ).show( "fast" );
});
    }
         if(res >= 300){
         $( "#razy4" ).click(function() {
  $( "#plus" ).show( "fast" );
});
    }
         if(res >= 3000){
         $( "#razy4" ).click(function() {
  $( "#plus2" ).show( "fast" );
});
    }
    if(res >= 6000){
         $( "#razy4" ).click(function() {
  $( "#plus3" ).show( "fast" );
});
    }
    if(res >= 10500){
         $( "#razy4" ).click(function() {
  $( "#plus4" ).show( "fast" );
});
    }
         if(res >= 50000){
         $( "#razy4" ).click(function() {
  $( "#plus5" ).show( "fast" );
});
    }
    if(res >= 100000){
         $( "#razy4" ).click(function() {
  $( "#plus6" ).show( "fast" );
});
    }
         if(res >= 8000){
         $( "#razy4" ).click(function() {
  $( "#plus7" ).show( "fast" );
});
    }
    if(res >= 300000){
         $( "#razy4" ).click(function() {
  $( "#plus8" ).show( "fast" );
});
    }
         if(res >= 30000){
         $( "#razy4" ).click(function() {
  $( "#minus1" ).show( "fast" );
});
    }
    if(res >= 55000){
         $( "#razy4" ).click(function() {
  $( "#minus2" ).show( "fast" );
});
    }
         if( res >= 1500){
       $('#admin').attr("disabled", false);
    }
        else{
            $('#admin').attr("disabled", true);
        }
    if( res >= 2000){
       $('#admin2').attr("disabled", false);
    }
    else{
            $('#admin2').attr("disabled", true);
        }
    if( res >= 3500){
       $('#admin3').attr("disabled", false);
    }
    else{
            $('#admin3').attr("disabled", true);
        }
    if( res >= 5500){
       $('#admin4').attr("disabled", false);
    }
    else{
            $('#admin4').attr("disabled", true);
        }
    if( res >= 10000){
       $('#admin5').attr("disabled", false);
    }
    else{
            $('#admin5').attr("disabled", true);
        }
    if( res >= 15000){
       $('#admin6').attr("disabled", false);
    }
    else{
            $('#admin6').attr("disabled", true);
        }
    if( res >= 25000){
       $('#admin7').attr("disabled", false);
    }
    else{
            $('#admin7').attr("disabled", true);
        }
    if( res >= 40000){
       $('#admin8').attr("disabled", false);
    }
    else{
            $('#admin8').attr("disabled", true);
        }
    if( res >= 60000){
       $('#admin9').attr("disabled", false);
    }
    else{
            $('#admin9').attr("disabled", true);
        }
    if( res >= 90000){
       $('#admin10').attr("disabled", false);
    }
    else{
            $('#admin10').attr("disabled", true);
        }
    if( res >= 1500000){
       $('#admin11').attr("disabled", false);
    }
    else{
            $('#admin11').attr("disabled", true);
        }
         if( res >= 1200000){
       $('#sklep2').attr("disabled", false);
    }
    else{
            $('#sklep2').attr("disabled", true);
        }
         if( res >= 7000){
       $('#sklep1').attr("disabled", false);
    }
    else{
            $('#sklep1').attr("disabled", true);
        }
             if( res >= 32000){
       $('#sklep3').attr("disabled", false);
    }
    else{
            $('#sklep3').attr("disabled", true);
        }
         if( res >= 50000){
       $('#sklep4').attr("disabled", false);
    }
    else{
            $('#sklep4').attr("disabled", true);
        }
         if( res >= 500000){
       $('#sklep5').attr("disabled", false);
    }
    else{
            $('#sklep5').attr("disabled", true);
        }
    }
    
    function clic4(){
       res = respect++;
        respect++;
         respect++;
         respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        document.getElementById("aka").innerHTML = res;
         if(res >= 200){
         $( "#razy10" ).click(function() {
  $( "#auto" ).show( "fast" );
});
    }
        if(res >= 10000){
         $( "#razy10" ).click(function() {
  $( "#razy40" ).show( "fast" );
});
    }
         if(res >= 300){
         $( "#razy10" ).click(function() {
  $( "#plus" ).show( "fast" );
});
    }
         if(res >= 3000){
         $( "#razy10" ).click(function() {
  $( "#plus2" ).show( "fast" );
});
    }
    if(res >= 6000){
         $( "#razy10" ).click(function() {
  $( "#plus3" ).show( "fast" );
});
    }
    if(res >= 10500){
         $( "#razy10" ).click(function() {
  $( "#plus4" ).show( "fast" );
});
    }
        if(res >= 50000){
         $( "#razy10" ).click(function() {
  $( "#plus5" ).show( "fast" );
});
    }
    if(res >= 100000){
         $( "#razy10" ).click(function() {
  $( "#plus6" ).show( "fast" );
});
    }
        if(res >= 8000){
         $( "#razy10" ).click(function() {
  $( "#plus7" ).show( "fast" );
});
    }
    if(res >= 300000){
         $( "#razy10" ).click(function() {
  $( "#plus8" ).show( "fast" );
});
    }
        if(res >= 30000){
         $( "#razy10" ).click(function() {
  $( "#minus1" ).show( "fast" );
});
    }
    if(res >= 55000){
         $( "#razy10" ).click(function() {
  $( "#minus2" ).show( "fast" );
});
    }
         if( res >= 1500){
       $('#admin').attr("disabled", false);
    }
        else{
            $('#admin').attr("disabled", true);
        }
    if( res >= 2000){
       $('#admin2').attr("disabled", false);
    }
    else{
            $('#admin2').attr("disabled", true);
        }
    if( res >= 3500){
       $('#admin3').attr("disabled", false);
    }
    else{
            $('#admin3').attr("disabled", true);
        }
    if( res >= 5500){
       $('#admin4').attr("disabled", false);
    }
    else{
            $('#admin4').attr("disabled", true);
        }
    if( res >= 10000){
       $('#admin5').attr("disabled", false);
    }
    else{
            $('#admin5').attr("disabled", true);
        }
    if( res >= 15000){
       $('#admin6').attr("disabled", false);
    }
    else{
            $('#admin6').attr("disabled", true);
        }
    if( res >= 25000){
       $('#admin7').attr("disabled", false);
    }
    else{
            $('#admin7').attr("disabled", true);
        }
    if( res >= 40000){
       $('#admin8').attr("disabled", false);
    }
    else{
            $('#admin8').attr("disabled", true);
        }
    if( res >= 60000){
       $('#admin9').attr("disabled", false);
    }
    else{
            $('#admin9').attr("disabled", true);
        }
    if( res >= 90000){
       $('#admin10').attr("disabled", false);
    }
    else{
            $('#admin10').attr("disabled", true);
        }
    if( res >= 1500000){
       $('#admin11').attr("disabled", false);
    }
    else{
            $('#admin11').attr("disabled", true);
        }
        if( res >= 1200000){
       $('#sklep2').attr("disabled", false);
    }
    else{
            $('#sklep2').attr("disabled", true);
        }
        if( res >= 7000){
       $('#sklep1').attr("disabled", false);
    }
    else{
            $('#sklep1').attr("disabled", true);
        }
            if( res >= 32000){
       $('#sklep3').attr("disabled", false);
    }
    else{
            $('#sklep3').attr("disabled", true);
        }
        if( res >= 50000){
       $('#sklep4').attr("disabled", false);
    }
    else{
            $('#sklep4').attr("disabled", true);
        }
        if( res >= 500000){
       $('#sklep5').attr("disabled", false);
    }
    else{
            $('#sklep5').attr("disabled", true);
        }
    }
    
    function clic5(){
       res = respect++;
        respect++;
         respect++;
         respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        respect++;respect++;respect++;respect++;respect++;respect++;respect++;
        respect++;respect++;
        document.getElementById("aka").innerHTML = res;
         if(res >= 200){
         $( "#razy40" ).click(function() {
  $( "#auto" ).show( "fast" );
});
    }
         if(res >= 300){
         $( "#razy40" ).click(function() {
  $( "#plus" ).show( "fast" );
});
    }
         if(res >= 3000){
         $( "#razy40" ).click(function() {
  $( "#plus2" ).show( "fast" );
});
    }
    if(res >= 6000){
         $( "#razy40" ).click(function() {
  $( "#plus3" ).show( "fast" );
});
    }
    if(res >= 10500){
         $( "#razy40" ).click(function() {
  $( "#plus4" ).show( "fast" );
});
    }
        if(res >= 50000){
         $( "#razy40" ).click(function() {
  $( "#plus5" ).show( "fast" );
});
    }
    if(res >= 100000){
         $( "#razy40" ).click(function() {
  $( "#plus6" ).show( "fast" );
});
    }
        if(res >= 8000){
         $( "#razy40" ).click(function() {
  $( "#plus7" ).show( "fast" );
});
    }
    if(res >= 300000){
         $( "#razy40" ).click(function() {
  $( "#plus8" ).show( "fast" );
});
    }
        if(res >= 30000){
         $( "#razy40" ).click(function() {
  $( "#minus1" ).show( "fast" );
});
    }
    if(res >= 55000){
         $( "#razy40" ).click(function() {
  $( "#minus2" ).show( "fast" );
});
    }
         if( res >= 1500){
       $('#admin').attr("disabled", false);
    }
        else{
            $('#admin').attr("disabled", true);
        }
    if( res >= 2000){
       $('#admin2').attr("disabled", false);
    }
    else{
            $('#admin2').attr("disabled", true);
        }
    if( res >= 3500){
       $('#admin3').attr("disabled", false);
    }
    else{
            $('#admin3').attr("disabled", true);
        }
    if( res >= 5500){
       $('#admin4').attr("disabled", false);
    }
    else{
            $('#admin4').attr("disabled", true);
        }
    if( res >= 10000){
       $('#admin5').attr("disabled", false);
    }
    else{
            $('#admin5').attr("disabled", true);
        }
    if( res >= 15000){
       $('#admin6').attr("disabled", false);
    }
    else{
            $('#admin6').attr("disabled", true);
        }
    if( res >= 25000){
       $('#admin7').attr("disabled", false);
    }
    else{
            $('#admin7').attr("disabled", true);
        }
    if( res >= 40000){
       $('#admin8').attr("disabled", false);
    }
    else{
            $('#admin8').attr("disabled", true);
        }
    if( res >= 60000){
       $('#admin9').attr("disabled", false);
    }
    else{
            $('#admin9').attr("disabled", true);
        }
    if( res >= 90000){
       $('#admin10').attr("disabled", false);
    }
    else{
            $('#admin10').attr("disabled", true);
        }
    if( res >= 1500000){
       $('#admin11').attr("disabled", false);
    }
    else{
            $('#admin11').attr("disabled", true);
        }
        if( res >= 1200000){
       $('#sklep2').attr("disabled", false);
    }
    else{
            $('#sklep2').attr("disabled", true);
        }
        if( res >= 7000){
       $('#sklep1').attr("disabled", false);
    }
    else{
            $('#sklep1').attr("disabled", true);
        }
            if( res >= 32000){
       $('#sklep3').attr("disabled", false);
    }
    else{
            $('#sklep3').attr("disabled", true);
        }
        if( res >= 50000){
       $('#sklep4').attr("disabled", false);
    }
    else{
            $('#sklep4').attr("disabled", true);
        }if( res >= 500000){
       $('#sklep5').attr("disabled", false);
    }
    else{
            $('#sklep5').attr("disabled", true);
        }
    }
    
    /********* AUTO & AWANSE *********/
    
    function auto(){
        
       setInterval(auto0,1000)
        document.getElementById("aka").innerHTML = res;
         $('#auto').attr("disabled", true);
                
       
    }
    
     function admin(){
        
       setInterval(auto0,750)
        
         $('#admin').attr("disabled", true);
         
         res = respect--;
         var j;
         
         x = 1500;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
         document.getElementById("aka").innerHTML = res;
         $( "#admin" ).hide( "fast" );
         
     }
    
    function admin2(){
        
       setInterval(auto0,500)
        
         $('#admin2').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 2000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin2" ).hide( "fast" );
        
     }
    function admin3(){
        
       setInterval(auto0,333)
        
         $('#admin3').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 3500;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin3" ).hide( "fast" );
        
     }
    function admin4(){
        
       setInterval(auto0,250)
        
         $('#admin4').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 5500;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin4" ).hide( "fast" );
        $( "#img1" ).show( "fast" );
     }
    function admin5(){
        
       setInterval(auto0,125)
        
         $('#admin5').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 10000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin5" ).hide( "fast" );
        $( "#img3" ).show( "fast" );
     }
    function admin6(){
        
       setInterval(auto0,83)
        
         $('#admin6').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 15000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin6" ).hide( "fast" );
        $( "#img4" ).show( "fast" );
     }
    function admin7(){
        
       setInterval(auto0,58)
        
         $('#admin7').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 25000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin7" ).hide( "fast" );
        $( "#img5" ).show( "fast" );
     }
    function admin8(){
        
       setInterval(auto0,37)
        
         $('#admin8').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 40000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin8" ).hide( "fast" );
        $( "#img6" ).show( "fast" );
     }
    function admin9(){
        
       setInterval(auto0,25)
        
         $('#admin9').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 60000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin9" ).hide( "fast" );
        $( "#img7" ).show( "fast" );
     }
    function admin10(){
        
       setInterval(auto0,16)
        
         $('#admin10').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 90000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin10" ).hide( "fast" );
        $( "#img8" ).show( "fast" );
     }
    function admin11(){
        
       setInterval(auto0,10)
        
         $('#admin11').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 1500000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#admin11" ).hide( "fast" );
        $( "#img10" ).show( "fast" );
     }
    function sklep1(){
        
       setInterval(auto0,166)
        
         $('#sklep1').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 7000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#img2" ).show( "fast" );
        //$( "#sklep1" ).hide( "fast" );
     }
    function sklep2(){
        
       setInterval(auto0,12)
        
         $('#sklep2').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 1200000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        //$( "#sklep2" ).hide( "fast" );
        $( "#img9" ).show( "fast" );
     }
    function sklep3(){
        
       setInterval(auto0,50)
        
         $('#sklep3').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 32000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#sklep3" ).hide( "fast" );
        $( "#img15" ).show( "fast" );
     }
     function sklep4(){
        
       setInterval(auto0,28)
        
         $('#sklep4').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 50000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#sklep4" ).hide( "fast" );
        $( "#img16" ).show( "fast" );
     }
    function sklep5(){
        
       setInterval(auto0,14)
        
         $('#sklep5').attr("disabled", true);
        
        
         
         res = respect--;
         var j;
         
         x = 500000;
         
           
         
         for(j=x;j>=0;j--){
        respect--; 
        }
        document.getElementById("aka").innerHTML = res;
        $( "#sklep5" ).hide( "fast" );
        $( "#img17" ).show( "fast" );
     }
    
   /********AUTO KLIKANIE SKLEP*****/ 
    
    function auto0(){
        res = respect++;
        document.getElementById("aka").innerHTML = res;
       
    }
    function auto1(){
        res = respect++;
        res = respect++;
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto2(){
        res = respect++;
        res = respect++;res = respect++;
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto3(){
        res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto4(){
        res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto5(){
        res = respect++; res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;
       
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto6(){
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto7(){
        res = respect++; res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto8(){
        res = respect++; res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto9(){
        res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;
        
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function auto10(){
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
     function auto11(){
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function sklepp1(){
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
    function sklepp2(){
          res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        
        document.getElementById("aka").innerHTML = res;
        
    }
function sklepp3(){
          res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         
        
        document.getElementById("aka").innerHTML = res;
        
    }
function sklepp4(){
          res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         
        
        document.getElementById("aka").innerHTML = res;
        
    }
function sklepp5(){
          res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
        res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
    res = respect++;res = respect++;res = respect++;res = respect++;res = respect++;
         
        
        document.getElementById("aka").innerHTML = res;
        
    }
    
    
    
