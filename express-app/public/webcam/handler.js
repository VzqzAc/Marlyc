Webcam.set({
  width: 300,
  height: 340,
  dest_height: 340,
  dest_width: 280
})
Webcam.attach( '#camera' )
$('#options').css('display', 'none')

function take_snapshot() {
  Webcam.snap( function(data_uri) {
    console.log(data_uri);
    $('#camera').css('display', 'none')
    $('#snapshot').css('display', 'none')
    $('#options').css('display', 'block')
    $('#result').css('display', 'block')
    $('#result').html('<img src="'+data_uri+'"/>')
    let base64data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '')
    $('#capturedPicture').val(base64data)
  } );
}

function reset_camera () {
  $('#options').css('display', 'none')
  $('#camera').css('display', 'block')
  $('#snapshot').css('display', 'block')
  $('#result').css('display', 'none')
}

function pictureIDAccepted () {
  $('#submit-form').prop('disabled', false)
  $('#pictureIDModal').modal('toggle')
}
