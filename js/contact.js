// $(function () {
//     "use strict";
//     $('#contact-form').validator();
//     $('#contact-form').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {
//             var url = "form/contact.html";
//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: $(this).serialize(),
//                 success: function (data) {
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;
//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
//                     if (messageAlert && messageText) {
//                         $('#contact-form').find('.messages').html(alertBox);
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });
//             return false;
//         }
//     })
// });



// $(function () {
//     "use strict";
//     $('#contact-form').validator();
//     $('#contact-form').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {
//             var url = "https://formspree.io/f/xpzkgopj";
//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: {
//                     name: name,
//                     message: message,
//                 },

//                 success: function (data) {
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;
//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
//                     if (messageAlert && messageText) {
//                         $('#contact-form').find('.messages').html(alertBox);
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });
//             return false;
//         }
//     })
// });

// $(function () {
//     "use strict";
//     $('#contact-form').validator();
//     $('#contact-form').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {
//             console.log('f')
//     }})});