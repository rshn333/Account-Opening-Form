$(document).ready(function(){
    $('.nepaliDate').nepaliDatePicker({
        npdMonth: true,
        npdYear: true,
        // defaultViewDate: { npdYear: new Date().getFullYear()-20, npdMonth: 01, npdDay: 01 },
        // npdYearCount: 10,
        ndpEnglishInput: 'englishDate'
    });
    $(".datePicker").nepaliDatePicker({
        npdMonth: true,
        npdYear: true,
        npdYearCount: 10
    });
});
    function table_column()
        {
         var temp = document.getElementById("test").cloneNode(true);
         document.getElementById("test1").appendChild(temp);

    }
    var tables = $('.charge-table');
    $('input[name="Nominee"]').on('change', function() {
      tables.hide();
      $('#' + $(this).val()).show();
    });
