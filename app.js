const btnBalance = document.querySelector(".btn-balance");
const balanceModal = document.querySelector(".balance-modal");
const btnCloseBalance = document.querySelector(".btn-close-balance");
const btnExpense = document.querySelector(".btn-expense");
const balanceModalForm = document.querySelector(".balance-modal-form");

const btnCloseExpence = document.querySelector(".btn-close-expense");
const btnBalanceSubmit = document.querySelector(".btn-balance-submit");
const startingBalance = document.querySelector(".starting-balance");
const startinBalanceRupees = document.querySelector(".startin-balance-rupees");
const item = document.querySelector(".item");
const planned = document.querySelector(".Planned");
const actual = document.querySelector(".Actual");
const tableBody = document.querySelector(".table-body");

const Expense = [];

const btnExpenseSubmit = document.querySelector(".btn-expense-submit");

// Balance form modal
const closeModal = function () {
  balanceModal.classList.add("hidden");
  balanceModal.classList.remove("flex");

  //   overlay.classList.add("hidden");
};

const closeModalForm = function () {
  balanceModalForm.classList.add("hidden");
  balanceModalForm.classList.remove("flex");

  //   overlay.classList.add("hidden");
};

function toggleModal() {
  balanceModal.classList.toggle("hidden");
  balanceModal.classList.toggle("flex");
}

function toggleModalForm() {
  balanceModalForm.classList.toggle("hidden");
  balanceModalForm.classList.toggle("flex");
}

btnBalance.addEventListener("click", toggleModal);
btnCloseBalance.addEventListener("click", closeModal);

btnExpense.addEventListener("click", toggleModalForm);
btnCloseExpence.addEventListener("click", closeModalForm);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !balanceModalForm.classList.contains("hidden")) {
    closeModalForm();
  }
  if (e.key === "Escape" && !balanceModal.classList.contains("hidden")) {
    closeModal();
  }
});

btnBalanceSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const val = startingBalance.value;
  startingBalance.value = "";
  if (val != "" && !isNaN(Number(val))) {
    startinBalanceRupees.textContent = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "INR",
    }).format(Number(val));
    closeModal();
  }
});

const AddExpense = function () {
  tableBody.textContent = "";
  Expense.forEach(function (exp) {
    const planned_val = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "INR",
    }).format(Number(exp.planned_val));

    const actual_val = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "INR",
    }).format(Number(exp.actual_val));

    const diff_val = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
      style: "currency",
      currency: "INR",
    }).format(Number(exp.planned_val) - Number(exp.actual_val));
    const html = `
    <tr class="bg-white border-b">
      <th
          scope="row"
          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
        >
            ${exp.item_val}
            </th>
            <td class="py-4 px-6">${planned_val}</td>
            <td class="py-4 px-6">${actual_val}</td>
            <td class="py-4 px-6 ${
              exp.planned_val < exp.actual_val
                ? "text-red-600"
                : "text-green-700"
            } ">${diff_val}</td>
    </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", html);
  });
};

const uiUpdate = function () {
  AddExpense();
};

btnExpenseSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const item_val = item.value;
  const planned_val = planned.value;
  const actual_val = actual.value;
  item.value = planned.value = actual.value = "";

  if (
    item_val != "" &&
    !isNaN(Number(planned_val)) &&
    !isNaN(Number(actual_val))
  ) {
    user_input = {};
    user_input.item_val = item_val;
    user_input.planned_val = planned_val;
    user_input.actual_val = actual_val;
    Expense.push(user_input);

    uiUpdate();
    closeModalForm();
  }
});
