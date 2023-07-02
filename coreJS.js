<script>
    GetDataSet = (res) => {
      let rs = document.getElementById("searching");
      console.log(typeof(res));
      if(res != null){
        rs.innerHTML = "ชื่อ-สกุล: " + res[0];
        rs.style.display = "block";
      }else
        rs.style.display = "none";
    };

    SearchID = (e) =>{
        google.script.run.withSuccessHandler(GetDataSet).MatchEmployID(e.value);
    }

    SAVED = () =>{
      let date = new Date();
      let format_date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      let d1 = document.getElementById('employID').value;
      let d2 = document.getElementById('building').value;
      let d3 = document.getElementById('issue').value;
      let d4 = document.getElementById('comment').value;
      google.script.run.ResponseDataSet([format_date,d1, d2, d3, d4]);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'บันทึกข้อมูลสำเร็จ',
        ShowConfirmButton: false,
        timer: 1500
      });
    }
