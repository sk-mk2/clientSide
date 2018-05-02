module.exports = (function(){
    
    function makeSortable(table){
        const headers = table.getElementsByTagName('th');
        for(let i = 0;i< headers.length;i++){
            (function(n) {
                headers[i].addEventListener('click',()=>sortrows(table,n));
            }(i));
        }
    }
    makeSortable(document.getElementsByTagName('table')[0]);

    function sortrows(table,n,comparator){
        const tbody = table.tBodies[0];
        let rows = tbody.getElementsByTagName('tr');
        rows = Array.prototype.slice.call(rows,1);//オブジェクトを配列にするっぽい
        console.log(rows);
        rows.sort((row1,row2)=>{
            const cell1 = row1.getElementsByTagName('td')[n];
            const cell2 = row2.getElementsByTagName('td')[n];
            console.log(cell1);
            const val1 = cell1.textContent || cell1.innerText;
            const val2 = cell2.textContent || cell2.innerText;
            if(comparator) return comparator(val1,val2);
            if(val1 < val2) return -1;
            else if (val1 > val2) return 1;
            else return 0;
        });

        for(let i = 0; i < rows.length; i++){
            tbody.appendChild(rows[i]);   
        }
    }

}).bind(null)();
