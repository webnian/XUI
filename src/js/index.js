$(function() {
  $('.open-actionsheet').on('click', function() {
		$('.x-actionsheet').show()
	})

	$('.close-actionsheet, .x-actionsheet li').on('click', function() {
		$('.x-actionsheet').hide()
	})

  $('.header-left').on('click', function() {
    history.go(-1)
  })
})
