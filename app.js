window.onload = () =>
    {
        document.querySelector('#calculate').onclick = calculateTip;
    }
 
function calculateTip() {
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    if (amount === '') {
        alert("Please enter valid values");
        return;
    }
    if (persons === '1')
        document.querySelector('#each').style.display = 'none';
    else
        document.querySelector('#each').style.display = 'block';
    let gettip=document.querySelector('#tips').value;
    gettip/=100
    let total = (amount * gettip) / persons;
    let tip=(amount*gettip)
    total = total.toFixed(2);
    console.log(amount)
    console.log(total)
    let totalwithtip=parseInt(amount)+parseInt(tip);
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
    document.querySelector('#totalwithtip').innerHTML=totalwithtip;
}