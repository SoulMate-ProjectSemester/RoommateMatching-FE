document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});

document.getElementById('college-select').addEventListener('change', function() {
    var selectedOption=this.value;
    var selectAll=document.querySelectorAll('.major-select select');

    selectAll.forEach(function(select) {
        select.style.display='none';
    });

    var majorSelect=document.getElementById(selectedOption);
    if(majorSelect) {
        majorSelect.style.display="inline-block";
        majorSelect.style.width="144px";
    }
});