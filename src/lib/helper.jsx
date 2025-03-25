import Swal from "sweetalert2";

class helper {
  toast (icon, title) {
    Swal.fire({
      toast: true,
      position: "top",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.onmouseenter = Swal.stopTimer;
    //     toast.onmouseleave = Swal.resumeTimer;
    //   },
    });
  }
}

export default new helper()