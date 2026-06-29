const sections = document.querySelectorAll('[data-animate]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
    }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-visible'));
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const previewLightboxState = {
  activeImages: [],
  currentImage: 0,
  lastFocusedElement: null,
};

const featureProjects = {
  'office-asset': {
    title: 'Office Asset & Inventory Management System (BPTP KALSEL)',
    description: 'End-to-end internal asset tracking for BPTP KALSEL, covering asset data, condition reports, maintenance, borrowing, returns, and employee self-service flows.',
    features: [
      {
        label: 'Admin',
        items: [
          'Employee and user account management',
          'Asset type, category, inventory, and detail management',
          'Asset additions, damaged assets, lost assets, and maintenance tracking',
          'Borrowing and return request verification',
          'Operational reports for assets, additions, damaged/lost assets, borrowing, returns, maintenance, conditions, and employees',
        ],
      },
      {
        label: 'Employee',
        items: [
          'Browse asset types, categories, and available assets',
          'Submit asset borrowing requests',
          'Track borrowing history and request details',
          'Submit return requests and review return history',
        ],
      },
    ],
    images: [
      ['assets/office-asset-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/office-asset-features/admin-02-employees.png', 'Employee management'],
      ['assets/office-asset-features/admin-03-users.png', 'User management'],
      ['assets/office-asset-features/admin-04-asset-types.png', 'Asset type list'],
      ['assets/office-asset-features/admin-05-asset-categories.png', 'Asset category list'],
      ['assets/office-asset-features/admin-06-assets-list.png', 'Asset inventory list'],
      ['assets/office-asset-features/admin-07-asset-detail.png', 'Asset detail'],
      ['assets/office-asset-features/admin-08-asset-additions.png', 'Asset additions'],
      ['assets/office-asset-features/admin-09-damaged-assets.png', 'Damaged assets'],
      ['assets/office-asset-features/admin-10-lost-assets.png', 'Lost assets'],
      ['assets/office-asset-features/admin-11-maintenance-summary.png', 'Maintenance summary'],
      ['assets/office-asset-features/admin-12-maintenance-active.png', 'Active maintenance assets'],
      ['assets/office-asset-features/admin-13-maintenance-finished.png', 'Finished maintenance assets'],
      ['assets/office-asset-features/admin-14-borrow-requests.png', 'Borrowing requests'],
      ['assets/office-asset-features/admin-15-borrow-request-detail.png', 'Borrowing request detail'],
      ['assets/office-asset-features/admin-16-return-requests.png', 'Return requests'],
      ['assets/office-asset-features/admin-17-return-request-detail.png', 'Return request detail'],
      ['assets/office-asset-features/admin-18-report-assets.png', 'Asset report'],
      ['assets/office-asset-features/admin-19-report-asset-additions.png', 'Asset additions report'],
      ['assets/office-asset-features/admin-20-report-damaged-assets.png', 'Damaged assets report'],
      ['assets/office-asset-features/admin-21-report-lost-assets.png', 'Lost assets report'],
      ['assets/office-asset-features/admin-22-report-maintenance.png', 'Maintenance report'],
      ['assets/office-asset-features/admin-23-report-borrowing.png', 'Borrowing report'],
      ['assets/office-asset-features/admin-24-report-returns.png', 'Returns report'],
      ['assets/office-asset-features/admin-25-report-borrowing-chart.png', 'Borrowing chart report'],
      ['assets/office-asset-features/admin-27-report-asset-condition.png', 'Asset condition report'],
      ['assets/office-asset-features/admin-28-report-employees.png', 'Employee report'],
      ['assets/office-asset-features/employee-01-asset-types.png', 'Employee asset type browser'],
      ['assets/office-asset-features/employee-02-asset-categories.png', 'Employee asset category browser'],
      ['assets/office-asset-features/employee-03-available-assets.png', 'Available assets'],
      ['assets/office-asset-features/employee-04-borrow-request-form.png', 'Borrowing request form'],
      ['assets/office-asset-features/employee-05-borrow-history.png', 'Borrowing history'],
      ['assets/office-asset-features/employee-06-borrow-detail.png', 'Borrowing detail'],
      ['assets/office-asset-features/employee-07-return-request-form.png', 'Return request form'],
      ['assets/office-asset-features/employee-08-return-history.png', 'Return history'],
      ['assets/office-asset-features/employee-09-return-detail.png', 'Return detail'],
    ],
  },
  'school-management': {
    title: 'Digital School Management & Grading System',
    description: 'Multi-role school operations system covering classroom activity, digital books, assignments, attendance, grading, reporting, and student progress workflows.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard, admin users, class, semester, subject, teacher, and student management',
          'Digital book library and book detail pages',
          'Active class student and subject management',
          'Grade input and academic report screens',
          'Student, teacher attendance, active class, and gender chart reports',
        ],
      },
      {
        label: 'Teacher',
        items: [
          'Classroom dashboard and subject tools',
          'Attendance detail and attendance input',
          'Task grading and report-card grade input',
          'Homeroom ranking and digital book access',
        ],
      },
      {
        label: 'Student',
        items: [
          'Classroom dashboard',
          'Attendance record',
          'Forum discussion',
          'Assignments and digital books',
        ],
      },
    ],
    images: [
      ['assets/school-management-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/school-management-features/admin-02-admin-users.png', 'Admin users'],
      ['assets/school-management-features/admin-03-classes.png', 'Class management'],
      ['assets/school-management-features/admin-04-semesters.png', 'Semester management'],
      ['assets/school-management-features/admin-05-subjects.png', 'Subject management'],
      ['assets/school-management-features/admin-06-digital-books.png', 'Digital books'],
      ['assets/school-management-features/admin-07-digital-book-detail.png', 'Digital book detail'],
      ['assets/school-management-features/admin-08-teachers.png', 'Teacher management'],
      ['assets/school-management-features/admin-09-students.png', 'Student management'],
      ['assets/school-management-features/admin-10-active-class-list.png', 'Active class list'],
      ['assets/school-management-features/admin-11-active-class-students.png', 'Active class students'],
      ['assets/school-management-features/admin-12-active-class-subjects.png', 'Active class subjects'],
      ['assets/school-management-features/admin-13-grade-input.png', 'Grade input'],
      ['assets/school-management-features/admin-14-teacher-report.png', 'Teacher report'],
      ['assets/school-management-features/admin-15-student-report.png', 'Student report'],
      ['assets/school-management-features/admin-16-active-class-report.png', 'Active class report'],
      ['assets/school-management-features/admin-17-gender-chart-report.png', 'Gender chart report'],
      ['assets/school-management-features/admin-18-teacher-attendance-report.png', 'Teacher attendance report'],
      ['assets/school-management-features/teacher-01-classroom-dashboard.png', 'Teacher classroom dashboard'],
      ['assets/school-management-features/teacher-02-subject-tools.png', 'Teacher subject tools'],
      ['assets/school-management-features/teacher-03-attendance-detail.png', 'Attendance detail'],
      ['assets/school-management-features/teacher-04-task-grading.png', 'Task grading'],
      ['assets/school-management-features/teacher-05-homeroom-ranking.png', 'Homeroom ranking'],
      ['assets/school-management-features/teacher-06-grade-input.png', 'Teacher grade input'],
      ['assets/school-management-features/teacher-07-attendance.png', 'Teacher attendance'],
      ['assets/school-management-features/teacher-08-digital-books.png', 'Teacher digital books'],
      ['assets/school-management-features/student-01-classroom-dashboard.png', 'Student classroom dashboard'],
      ['assets/school-management-features/student-02-attendance.png', 'Student attendance'],
      ['assets/school-management-features/student-03-forum-discussion.png', 'Student forum discussion'],
      ['assets/school-management-features/student-04-assignments.png', 'Student assignments'],
      ['assets/school-management-features/student-05-digital-books.png', 'Student digital books'],
    ],
  },
  'kostel-reservation': {
    title: 'Kostel Reservation & Operations Platform',
    description: 'Boarding house reservation and operations system covering room inventory, reservations, check-ins, check-outs, employee service workflows, receipts, and operational reporting.',
    features: [
      {
        label: 'Admin',
        items: [
          'Admin and employee account management',
          'Room type, pricing, facility, and room inventory management',
          'Reservation, check-in, check-out, and receipt workflows',
          'Reports for reservations, check-ins, check-outs, available rooms, employees, service activity, charts, and finance',
        ],
      },
      {
        label: 'Employee',
        items: [
          'Reservation list and reservation entry',
          'Check-in list and walk-in check-in entry',
          'Check-out history and password management',
        ],
      },
    ],
    images: [
      ['assets/kostel-reservation-features/login-01-login-page.png', 'Login page'],
      ['assets/kostel-reservation-features/admin-01-admin-users.png', 'Admin user list'],
      ['assets/kostel-reservation-features/admin-02-add-admin.png', 'Add admin form'],
      ['assets/kostel-reservation-features/admin-03-employees.png', 'Employee management'],
      ['assets/kostel-reservation-features/admin-04-add-employee.png', 'Add employee form'],
      ['assets/kostel-reservation-features/admin-05-room-types.png', 'Room type list'],
      ['assets/kostel-reservation-features/admin-06-add-room-type.png', 'Add room type form'],
      ['assets/kostel-reservation-features/admin-07-rooms.png', 'Room list'],
      ['assets/kostel-reservation-features/admin-08-add-room.png', 'Add room form'],
      ['assets/kostel-reservation-features/admin-09-reservations.png', 'Reservation list'],
      ['assets/kostel-reservation-features/admin-10-add-reservation.png', 'Add reservation form'],
      ['assets/kostel-reservation-features/admin-11-reservation-detail.png', 'Reservation detail'],
      ['assets/kostel-reservation-features/admin-12-check-ins.png', 'Check-in list'],
      ['assets/kostel-reservation-features/admin-13-add-check-in.png', 'Add check-in form'],
      ['assets/kostel-reservation-features/admin-14-check-in-detail.png', 'Check-in detail'],
      ['assets/kostel-reservation-features/admin-15-check-in-receipt.png', 'Check-in receipt'],
      ['assets/kostel-reservation-features/admin-16-check-outs.png', 'Check-out list'],
      ['assets/kostel-reservation-features/admin-17-report-reservations.png', 'Reservation report'],
      ['assets/kostel-reservation-features/admin-18-report-check-ins.png', 'Check-in report'],
      ['assets/kostel-reservation-features/admin-19-report-check-outs.png', 'Check-out report'],
      ['assets/kostel-reservation-features/admin-20-report-available-rooms.png', 'Available rooms report'],
      ['assets/kostel-reservation-features/admin-21-report-employees.png', 'Employee report'],
      ['assets/kostel-reservation-features/admin-22-report-employee-services.png', 'Employee service report'],
      ['assets/kostel-reservation-features/admin-23-report-reservation-chart.png', 'Reservation chart report'],
      ['assets/kostel-reservation-features/admin-24-report-check-in-chart.png', 'Check-in chart report'],
      ['assets/kostel-reservation-features/admin-25-report-finance.png', 'Finance report'],
      ['assets/kostel-reservation-features/admin-26-change-password.png', 'Admin change password'],
      ['assets/kostel-reservation-features/employee-01-reservations.png', 'Employee reservation list'],
      ['assets/kostel-reservation-features/employee-02-add-reservation.png', 'Employee add reservation form'],
      ['assets/kostel-reservation-features/employee-03-check-ins.png', 'Employee check-in list'],
      ['assets/kostel-reservation-features/employee-04-add-check-in.png', 'Employee add check-in form'],
      ['assets/kostel-reservation-features/employee-05-check-outs.png', 'Employee check-out list'],
      ['assets/kostel-reservation-features/employee-06-change-password.png', 'Employee change password'],
    ],
  },
  'buku-tamu': {
    title: 'Digital Guest Book & Visitor Management System (DARPUSDA Banjarbaru)',
    description: 'Visitor management system for DARPUSDA Banjarbaru covering guest check-in/out, visitor records, room and bookshelf master data, staff schedules, events, agendas, school visit requests, documents, and reports.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard visitor statistics and visit trend overview',
          'Guest records, user accounts, room data, bookshelf data, staff schedules, events, and agenda management',
          'Agenda approval flow for school visits, events, and internal activities',
          'Report generators for guests, school visits, events, agendas, rooms, bookshelves, visitor types, visit totals, and staff activity',
        ],
      },
      {
        label: 'Petugas',
        items: [
          'Guest check-in and check-out forms',
          'Guest history, guest detail, and guest editing screens',
          'Agenda management and document tracking workflows',
        ],
      },
      {
        label: 'School',
        items: [
          'School account registration and login',
          'Visit request list for submitted school agendas',
          'School visit request form and password management',
        ],
      },
    ],
    images: [
      ['assets/buku-tamu-features/login-01-login-page.png', 'Login page'],
      ['assets/buku-tamu-features/login-02-school-registration.png', 'School registration page'],
      ['assets/buku-tamu-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/buku-tamu-features/admin-02-guest-data.png', 'Guest data list'],
      ['assets/buku-tamu-features/admin-03-guest-detail.png', 'Guest detail'],
      ['assets/buku-tamu-features/admin-04-edit-guest.png', 'Edit guest form'],
      ['assets/buku-tamu-features/admin-05-users.png', 'User list'],
      ['assets/buku-tamu-features/admin-06-add-user.png', 'Add user form'],
      ['assets/buku-tamu-features/admin-07-edit-user.png', 'Edit user form'],
      ['assets/buku-tamu-features/admin-08-rooms.png', 'Room list'],
      ['assets/buku-tamu-features/admin-09-add-room.png', 'Add room form'],
      ['assets/buku-tamu-features/admin-10-edit-room.png', 'Edit room form'],
      ['assets/buku-tamu-features/admin-11-bookshelves.png', 'Bookshelf list'],
      ['assets/buku-tamu-features/admin-12-add-bookshelf.png', 'Add bookshelf form'],
      ['assets/buku-tamu-features/admin-13-edit-bookshelf.png', 'Edit bookshelf form'],
      ['assets/buku-tamu-features/admin-14-staff.png', 'Staff duty list'],
      ['assets/buku-tamu-features/admin-15-add-staff.png', 'Add staff duty form'],
      ['assets/buku-tamu-features/admin-16-edit-staff.png', 'Edit staff duty form'],
      ['assets/buku-tamu-features/admin-17-events.png', 'Event list'],
      ['assets/buku-tamu-features/admin-18-add-event.png', 'Add event form'],
      ['assets/buku-tamu-features/admin-19-event-detail.png', 'Event detail'],
      ['assets/buku-tamu-features/admin-20-edit-event.png', 'Edit event form'],
      ['assets/buku-tamu-features/admin-21-agenda.png', 'Agenda list'],
      ['assets/buku-tamu-features/admin-22-agenda-detail.png', 'Agenda approval detail'],
      ['assets/buku-tamu-features/admin-23-edit-agenda.png', 'Edit agenda form'],
      ['assets/buku-tamu-features/admin-24-reports-guest-agenda.png', 'Guest and agenda reports'],
      ['assets/buku-tamu-features/admin-25-reports-master-analytics.png', 'Master data and analytics reports'],
      ['assets/buku-tamu-features/admin-26-change-password.png', 'Admin change password'],
      ['assets/buku-tamu-features/petugas-01-dashboard.png', 'Staff dashboard'],
      ['assets/buku-tamu-features/petugas-02-guest-check-in.png', 'Guest check-in form'],
      ['assets/buku-tamu-features/petugas-03-guest-check-out.png', 'Guest check-out form'],
      ['assets/buku-tamu-features/petugas-04-guest-data.png', 'Staff guest data list'],
      ['assets/buku-tamu-features/petugas-05-guest-detail.png', 'Staff guest detail'],
      ['assets/buku-tamu-features/petugas-06-edit-guest.png', 'Staff edit guest form'],
      ['assets/buku-tamu-features/petugas-07-agenda.png', 'Staff agenda list'],
      ['assets/buku-tamu-features/petugas-08-add-agenda.png', 'Staff add agenda form'],
      ['assets/buku-tamu-features/petugas-09-edit-agenda.png', 'Staff edit agenda form'],
      ['assets/buku-tamu-features/petugas-10-documents.png', 'Document list'],
      ['assets/buku-tamu-features/petugas-11-add-document.png', 'Add document form'],
      ['assets/buku-tamu-features/petugas-12-edit-document.png', 'Edit document form'],
      ['assets/buku-tamu-features/petugas-13-change-password.png', 'Staff change password'],
      ['assets/buku-tamu-features/school-01-dashboard.png', 'School dashboard'],
      ['assets/buku-tamu-features/school-02-visit-requests.png', 'School visit request list'],
      ['assets/buku-tamu-features/school-03-create-visit-request.png', 'Create school visit request form'],
      ['assets/buku-tamu-features/school-04-change-password.png', 'School change password'],
    ],
  },
  'buku-tamu-bps': {
    title: 'Buku Tamu BPS HSU',
    description: 'Guest book and appointment management system for BPS Hulu Sungai Utara covering walk-in visits, guest accounts, online appointment requests, employee and division master data, reports, and IKM satisfaction scoring.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard with visitor counters and recent visits',
          'Guest visit data, online request details, divisions, employees, internal users, and guest registrant management',
          'Report generators for visits, visit requests, employees, guest accounts, account registrations, IKM, visit type charts, visitor charts, and IKM charts',
          'Profile and password management',
        ],
      },
      {
        label: 'Petugas',
        items: [
          'Front-desk guest book form for walk-in visits',
          'Guest visit data and request detail handling',
          'Guest account management and forgot-password request handling',
          'Profile and password management',
        ],
      },
      {
        label: 'Guest',
        items: [
          'Guest dashboard and visit request form',
          'Personal visit history, detail, and edit request screens',
          'Profile management and password changes',
          'Public IKM satisfaction rating page after completed visits',
        ],
      },
    ],
    images: [
      ['assets/buku-tamu-bps-features/login-01-login-page.png', 'Login page'],
      ['assets/buku-tamu-bps-features/login-02-registration.png', 'Guest registration page'],
      ['assets/buku-tamu-bps-features/login-03-forgot-password.png', 'Forgot password page'],
      ['assets/buku-tamu-bps-features/public-01-ikm-rating.png', 'IKM rating page'],
      ['assets/buku-tamu-bps-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/buku-tamu-bps-features/admin-02-guest-data.png', 'Guest and visit data'],
      ['assets/buku-tamu-bps-features/admin-03-guest-detail-offline.png', 'Offline visit detail'],
      ['assets/buku-tamu-bps-features/admin-04-guest-detail-request.png', 'Online visit request detail'],
      ['assets/buku-tamu-bps-features/admin-05-edit-offline-visit.png', 'Edit offline visit form'],
      ['assets/buku-tamu-bps-features/admin-06-edit-online-request.png', 'Edit online request form'],
      ['assets/buku-tamu-bps-features/admin-07-divisions.png', 'Division list'],
      ['assets/buku-tamu-bps-features/admin-08-add-division.png', 'Add division form'],
      ['assets/buku-tamu-bps-features/admin-09-edit-division.png', 'Edit division form'],
      ['assets/buku-tamu-bps-features/admin-10-employees.png', 'Employee list'],
      ['assets/buku-tamu-bps-features/admin-11-add-employee.png', 'Add employee form'],
      ['assets/buku-tamu-bps-features/admin-12-edit-employee.png', 'Edit employee form'],
      ['assets/buku-tamu-bps-features/admin-13-users.png', 'Internal user list'],
      ['assets/buku-tamu-bps-features/admin-14-add-user.png', 'Add internal user form'],
      ['assets/buku-tamu-bps-features/admin-15-edit-user.png', 'Edit internal user form'],
      ['assets/buku-tamu-bps-features/admin-16-registrants.png', 'Guest account registrant list'],
      ['assets/buku-tamu-bps-features/admin-17-registrant-detail.png', 'Guest account registrant detail'],
      ['assets/buku-tamu-bps-features/admin-18-reports-top.png', 'Reports top section'],
      ['assets/buku-tamu-bps-features/admin-19-reports-bottom.png', 'Reports analytics section'],
      ['assets/buku-tamu-bps-features/admin-20-profile.png', 'Admin profile'],
      ['assets/buku-tamu-bps-features/admin-21-change-password.png', 'Admin change password'],
      ['assets/buku-tamu-bps-features/petugas-01-dashboard.png', 'Staff dashboard'],
      ['assets/buku-tamu-bps-features/petugas-02-guest-book.png', 'Staff guest book form'],
      ['assets/buku-tamu-bps-features/petugas-03-guest-data.png', 'Staff guest data'],
      ['assets/buku-tamu-bps-features/petugas-04-guest-detail-request.png', 'Staff request detail'],
      ['assets/buku-tamu-bps-features/petugas-05-edit-visit.png', 'Staff edit visit form'],
      ['assets/buku-tamu-bps-features/petugas-06-guest-accounts.png', 'Guest account list'],
      ['assets/buku-tamu-bps-features/petugas-07-add-guest-account.png', 'Add guest account form'],
      ['assets/buku-tamu-bps-features/petugas-08-guest-account-detail.png', 'Guest account detail'],
      ['assets/buku-tamu-bps-features/petugas-09-edit-guest-account.png', 'Edit guest account form'],
      ['assets/buku-tamu-bps-features/petugas-10-forgot-password-requests.png', 'Forgot password request list'],
      ['assets/buku-tamu-bps-features/petugas-11-forgot-password-detail.png', 'Forgot password request detail'],
      ['assets/buku-tamu-bps-features/petugas-12-profile.png', 'Staff profile'],
      ['assets/buku-tamu-bps-features/petugas-13-change-password.png', 'Staff change password'],
      ['assets/buku-tamu-bps-features/guest-01-dashboard.png', 'Guest dashboard'],
      ['assets/buku-tamu-bps-features/guest-02-visit-request-form.png', 'Guest visit request form'],
      ['assets/buku-tamu-bps-features/guest-03-visit-history.png', 'Guest visit history'],
      ['assets/buku-tamu-bps-features/guest-04-visit-detail.png', 'Guest visit detail'],
      ['assets/buku-tamu-bps-features/guest-05-edit-visit-request.png', 'Guest edit visit request form'],
      ['assets/buku-tamu-bps-features/guest-06-profile.png', 'Guest profile'],
      ['assets/buku-tamu-bps-features/guest-07-change-password.png', 'Guest change password'],
    ],
  },

  'buku-tamu-perpustakaan-bptp': {
    title: 'Buku Tamu Perpustakaan BPTP KALSEL',
    description: 'Digital library visitor book for BPTP KALSEL, covering visitor intake, profession-specific fields, searchable visit history, visitor detail lookup, and export timestamp tracking.',
    features: [
      {
        label: 'Visitor Intake',
        items: [
          'Landing page with direct access to the guest form and visit history',
          'Guest identity form with visit date and live visit time',
          'Profession-specific fields for public visitors, students, and BPTP employees',
          'Topic selection and visit-purpose notes with form validation and notification feedback',
        ],
      },
      {
        label: 'Visit History',
        items: [
          'Visitor history table with profession, topic, and visit date information',
          'Search by visitor name, date range, profession, and topic',
          'Visitor detail modal including university or division data when available',
          'Excel export action with last-download timestamp tracking',
        ],
      },
    ],
    images: [
      ['assets/buku-tamu-perpustakaan-bptp-features/01-home.png', 'Landing page'],
      ['assets/buku-tamu-perpustakaan-bptp-features/02-visitor-form-public.png', 'Visitor form for public visitors'],
      ['assets/buku-tamu-perpustakaan-bptp-features/03-visitor-form-student.png', 'Visitor form with student fields'],
      ['assets/buku-tamu-perpustakaan-bptp-features/04-visitor-form-employee.png', 'Visitor form with BPTP employee fields'],
      ['assets/buku-tamu-perpustakaan-bptp-features/05-history-list.png', 'Visit history list'],
      ['assets/buku-tamu-perpustakaan-bptp-features/06-history-search-filter.png', 'Visit history search and filters'],
      ['assets/buku-tamu-perpustakaan-bptp-features/07-visitor-detail-modal.png', 'Visitor detail modal'],
      ['assets/buku-tamu-perpustakaan-bptp-features/08-history-export-status.png', 'Export controls and backup timestamp'],
    ],
  },
  'cell-phone-store': {
    title: 'Cell Phone Store',
    description: 'Retail operations system for managing phone-accessory inventory, balance deposits, credit and top-up products, sales transactions, stock movement, and staff/admin master data.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Master Data',
        items: [
          'Admin, employee, and item-type management',
          'Add and edit modal workflows for reference data',
          'Searchable tables for core store records',
        ],
      },
      {
        label: 'Inventory & Sales',
        items: [
          'Item catalog grouped by item type with accordion browsing',
          'Stock-in and item-sale modals from each item row',
          'Incoming and outgoing item transaction history',
        ],
      },
      {
        label: 'Digital Products & Balance',
        items: [
          'Current balance overview with credit and top-up product tables',
          'Balance deposit history and add/edit flows',
          'Credit and top-up sales history with pricing and edit workflows',
        ],
      },
    ],
    images: [
      ['assets/cell-phone-store-features/01-admin-list.png', 'Admin master data'],
      ['assets/cell-phone-store-features/02-employees-list.png', 'Employee master data'],
      ['assets/cell-phone-store-features/03-item-types-list.png', 'Item type master data'],
      ['assets/cell-phone-store-features/04-items-accordion.png', 'Item inventory by category'],
      ['assets/cell-phone-store-features/05-balance-overview.png', 'Balance, credit and top-up overview'],
      ['assets/cell-phone-store-features/06-item-sales-history.png', 'Item sales history'],
      ['assets/cell-phone-store-features/07-credit-sales-history.png', 'Credit sales history'],
      ['assets/cell-phone-store-features/08-topup-sales-history.png', 'Top-up sales history'],
      ['assets/cell-phone-store-features/09-stock-in-history.png', 'Stock-in history'],
      ['assets/cell-phone-store-features/10-balance-in-history.png', 'Balance deposit history'],
      ['assets/cell-phone-store-features/11-add-admin-modal.png', 'Add admin modal'],
      ['assets/cell-phone-store-features/12-add-employee-modal.png', 'Add employee modal'],
      ['assets/cell-phone-store-features/13-add-item-type-modal.png', 'Add item type modal'],
      ['assets/cell-phone-store-features/14-add-item-modal.png', 'Add item modal'],
      ['assets/cell-phone-store-features/15-item-stock-in-modal.png', 'Item stock-in modal'],
      ['assets/cell-phone-store-features/16-item-sale-modal.png', 'Item sale modal'],
      ['assets/cell-phone-store-features/17-add-balance-modal.png', 'Add balance modal'],
      ['assets/cell-phone-store-features/18-edit-stock-in-modal.png', 'Edit stock-in modal'],
      ['assets/cell-phone-store-features/19-edit-item-sale-modal.png', 'Edit item sale modal'],
      ['assets/cell-phone-store-features/20-edit-credit-sale-modal.png', 'Edit credit sale modal'],
      ['assets/cell-phone-store-features/21-edit-topup-sale-modal.png', 'Edit top-up sale modal'],
      ['assets/cell-phone-store-features/22-edit-balance-in-modal.png', 'Edit balance deposit modal'],
    ],
  },
  'bank-kalsel-agunan': {
    title: 'Bank Kalsel Collateral Document Management System',
    description: 'Role-based collateral document archive system for Bank Kalsel covering customer records, employee records, cabinet storage slots, collateral document registration, document borrowing, and operational reporting.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Archive Management',
        items: [
          'Dashboard summary for customers, cabinets, collateral documents, and employees',
          'Customer and employee master-data pages with add, detail, and edit workflows where records are available',
          'Cabinet and storage-slot management for physical collateral document placement',
          'Collateral document registration form with credit type, collateral type, storage location, status, dates, notes, and file upload',
        ],
      },
      {
        label: 'Borrowing Workflow',
        items: [
          'Collateral document list and loan list for tracking document movement',
          'Loan creation form for assigning a document, borrower, borrowing date, return date, and purpose',
          'Employee-role dashboard and document access screens',
        ],
      },
      {
        label: 'Reports',
        items: [
          'Collateral list, verification status, and expiration reports',
          'Loan and return, document location, and storage availability reports',
          'Customer and employee reports with printable report flows',
          'Password management for user accounts',
        ],
      },
    ],
    images: [
      ['assets/bank-kalsel-agunan-features/login-01-login-page.png', 'Login page'],
      ['assets/bank-kalsel-agunan-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/bank-kalsel-agunan-features/admin-02-customers.png', 'Customer list'],
      ['assets/bank-kalsel-agunan-features/admin-03-add-customer.png', 'Add customer form'],
      ['assets/bank-kalsel-agunan-features/admin-06-employees.png', 'Employee list'],
      ['assets/bank-kalsel-agunan-features/admin-07-add-employee.png', 'Add employee form'],
      ['assets/bank-kalsel-agunan-features/admin-08-employee-detail.png', 'Employee detail'],
      ['assets/bank-kalsel-agunan-features/admin-09-edit-employee.png', 'Edit employee form'],
      ['assets/bank-kalsel-agunan-features/admin-10-cabinets.png', 'Cabinet list'],
      ['assets/bank-kalsel-agunan-features/admin-11-add-cabinet.png', 'Add cabinet form'],
      ['assets/bank-kalsel-agunan-features/admin-12-cabinet-detail.png', 'Cabinet detail and storage slots'],
      ['assets/bank-kalsel-agunan-features/admin-13-edit-cabinet.png', 'Edit cabinet form'],
      ['assets/bank-kalsel-agunan-features/admin-14-add-storage-slot.png', 'Add storage slot form'],
      ['assets/bank-kalsel-agunan-features/admin-15-edit-storage-slot.png', 'Edit storage slot form'],
      ['assets/bank-kalsel-agunan-features/admin-16-collateral-documents.png', 'Collateral document list'],
      ['assets/bank-kalsel-agunan-features/admin-17-add-collateral-document.png', 'Add collateral document form'],
      ['assets/bank-kalsel-agunan-features/admin-20-document-loans.png', 'Collateral document loan list'],
      ['assets/bank-kalsel-agunan-features/admin-21-add-document-loan.png', 'Add collateral document loan form'],
      ['assets/bank-kalsel-agunan-features/admin-23-report-collateral-list.png', 'Collateral list report'],
      ['assets/bank-kalsel-agunan-features/admin-24-report-verification-status.png', 'Verification status report'],
      ['assets/bank-kalsel-agunan-features/admin-25-report-expiration.png', 'Collateral expiration report'],
      ['assets/bank-kalsel-agunan-features/admin-26-report-loans-returns.png', 'Loan and return report'],
      ['assets/bank-kalsel-agunan-features/admin-27-report-document-location.png', 'Document location report'],
      ['assets/bank-kalsel-agunan-features/admin-28-report-storage-availability.png', 'Storage availability report'],
      ['assets/bank-kalsel-agunan-features/admin-29-report-customers.png', 'Customer report'],
      ['assets/bank-kalsel-agunan-features/admin-30-report-employees.png', 'Employee report'],
      ['assets/bank-kalsel-agunan-features/admin-31-change-password.png', 'Admin change password'],
      ['assets/bank-kalsel-agunan-features/employee-01-dashboard.png', 'Employee dashboard'],
      ['assets/bank-kalsel-agunan-features/employee-02-collateral-documents.png', 'Employee collateral document list'],
      ['assets/bank-kalsel-agunan-features/employee-03-document-loans.png', 'Employee collateral document loan list'],
      ['assets/bank-kalsel-agunan-features/employee-04-change-password.png', 'Employee change password'],
    ],
  },
  'ptsp-kemenag': {
    title: 'PTSP Kemenag Service Management System',
    description: 'Integrated one-stop service platform for Kemenag covering public request intake, employee and master-data management, internal staff submissions, public request verification, and administrative reporting.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Public Services',
        items: [
          'Public PTSP landing page for selecting service request types',
          'Online request forms for internship or PKL, qibla measurement, worship-place registration, and research requests',
          'Service intake flows designed for public applicants without admin access',
        ],
      },
      {
        label: 'Admin & Master Data',
        items: [
          'Admin dashboard and employee management area',
          'Master data for ranks, groups, positions, travel costs, worship places, leave types, transport types, and permit types',
          'Add and edit forms for reference data management',
          'Admin password management',
        ],
      },
      {
        label: 'Submissions & Reports',
        items: [
          'Internal submission queues for leave, facilities, travel orders, and permits',
          'Public request queues for worship-place registration, research, internship or PKL, and qibla measurement',
          'Report screens with filters and print actions for internal submissions and public requests',
        ],
      },
    ],
    images: [
      ['assets/ptsp-kemenag-features/public-01-service-home.png', 'Public PTSP service landing page'],
      ['assets/ptsp-kemenag-features/public-02-internship-request-form.png', 'Public internship request form'],
      ['assets/ptsp-kemenag-features/public-03-qibla-measurement-form.png', 'Public qibla measurement request form'],
      ['assets/ptsp-kemenag-features/public-04-worship-place-registration-form.png', 'Public worship-place registration form'],
      ['assets/ptsp-kemenag-features/public-05-research-request-form.png', 'Public research request form'],
      ['assets/ptsp-kemenag-features/login-01-login-page.png', 'Login page'],
      ['assets/ptsp-kemenag-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/ptsp-kemenag-features/admin-02-employees.png', 'Employee list'],
      ['assets/ptsp-kemenag-features/admin-03-add-employee.png', 'Add employee form'],
      ['assets/ptsp-kemenag-features/admin-04-ranks.png', 'Rank list'],
      ['assets/ptsp-kemenag-features/admin-05-add-rank.png', 'Add rank form'],
      ['assets/ptsp-kemenag-features/admin-06-edit-rank.png', 'Edit rank form'],
      ['assets/ptsp-kemenag-features/admin-07-groups.png', 'Group list'],
      ['assets/ptsp-kemenag-features/admin-08-add-group.png', 'Add group form'],
      ['assets/ptsp-kemenag-features/admin-09-edit-group.png', 'Edit group form'],
      ['assets/ptsp-kemenag-features/admin-10-positions.png', 'Position list'],
      ['assets/ptsp-kemenag-features/admin-11-add-position.png', 'Add position form'],
      ['assets/ptsp-kemenag-features/admin-12-edit-position.png', 'Edit position form'],
      ['assets/ptsp-kemenag-features/admin-13-travel-costs.png', 'Travel cost list'],
      ['assets/ptsp-kemenag-features/admin-14-add-travel-cost.png', 'Add travel cost form'],
      ['assets/ptsp-kemenag-features/admin-15-edit-travel-cost.png', 'Edit travel cost form'],
      ['assets/ptsp-kemenag-features/admin-16-worship-places.png', 'Worship place list'],
      ['assets/ptsp-kemenag-features/admin-17-add-worship-place.png', 'Add worship place form'],
      ['assets/ptsp-kemenag-features/admin-18-edit-worship-place.png', 'Edit worship place form'],
      ['assets/ptsp-kemenag-features/admin-19-leave-types.png', 'Leave type list'],
      ['assets/ptsp-kemenag-features/admin-20-add-leave-type.png', 'Add leave type form'],
      ['assets/ptsp-kemenag-features/admin-21-edit-leave-type.png', 'Edit leave type form'],
      ['assets/ptsp-kemenag-features/admin-22-transport-types.png', 'Transport type list'],
      ['assets/ptsp-kemenag-features/admin-23-add-transport-type.png', 'Add transport type form'],
      ['assets/ptsp-kemenag-features/admin-24-edit-transport-type.png', 'Edit transport type form'],
      ['assets/ptsp-kemenag-features/admin-25-permit-types.png', 'Permit type list'],
      ['assets/ptsp-kemenag-features/admin-26-add-permit-type.png', 'Add permit type form'],
      ['assets/ptsp-kemenag-features/admin-27-edit-permit-type.png', 'Edit permit type form'],
      ['assets/ptsp-kemenag-features/admin-28-leave-submissions.png', 'Leave submission list'],
      ['assets/ptsp-kemenag-features/admin-29-facility-submissions.png', 'Facility submission list'],
      ['assets/ptsp-kemenag-features/admin-30-travel-order-submissions.png', 'SPDP submission list'],
      ['assets/ptsp-kemenag-features/admin-31-permit-submissions.png', 'Permit submission list'],
      ['assets/ptsp-kemenag-features/admin-32-worship-place-requests.png', 'Worship-place registration request list'],
      ['assets/ptsp-kemenag-features/admin-33-research-requests.png', 'Research request list'],
      ['assets/ptsp-kemenag-features/admin-34-internship-requests.png', 'Internship request list'],
      ['assets/ptsp-kemenag-features/admin-35-qibla-measurement-requests.png', 'Qibla measurement request list'],
      ['assets/ptsp-kemenag-features/admin-36-report-leave-submissions.png', 'Leave submission report'],
      ['assets/ptsp-kemenag-features/admin-37-report-facility-submissions.png', 'Facility submission report'],
      ['assets/ptsp-kemenag-features/admin-38-report-permit-submissions.png', 'Permit submission report'],
      ['assets/ptsp-kemenag-features/admin-39-report-travel-orders.png', 'SPDP report'],
      ['assets/ptsp-kemenag-features/admin-40-report-worship-place-requests.png', 'Worship-place request report'],
      ['assets/ptsp-kemenag-features/admin-41-report-internship-requests.png', 'Internship request report'],
      ['assets/ptsp-kemenag-features/admin-42-report-qibla-measurement-requests.png', 'Qibla measurement request report'],
      ['assets/ptsp-kemenag-features/admin-43-report-research-requests.png', 'Research request report'],
      ['assets/ptsp-kemenag-features/admin-44-change-password.png', 'Change password page'],
    ],
  },
  'kemenag-attendance-payroll': {
    title: 'Kemenag Tapin Attendance & Payroll System',
    description: 'Role-based attendance and payroll system for Kemenag Tapin, covering employee master data, position and allowance setup, QR-based attendance, honor tracking, payroll reports, and employee self-service.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard summary for employee, attendance, and payroll operations',
          'Position, allowance, employee, and honor management modules',
          'Add, edit, and detail screens for employee administration',
          'Password management for administrator accounts',
        ],
      },
      {
        label: 'Attendance & Payroll',
        items: [
          'QR attendance scanner and attendance-history entry workflows',
          'Attendance table view for daily and monthly monitoring',
          'Employee, attendance history, monthly attendance, salary, allowance, honor, and salary-increase reports',
          'Salary slip report flow for individual employee payroll documentation',
        ],
      },
      {
        label: 'Employee',
        items: [
          'Employee dashboard for role-specific access',
          'Self-service profile detail with identity, job, salary, allowance, and QR code information',
          'Employee password management',
        ],
      },
    ],
    images: [
      ['assets/kemenag-attendance-payroll-features/login-01-login-page.png', 'Login page'],
      ['assets/kemenag-attendance-payroll-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/kemenag-attendance-payroll-features/admin-02-positions.png', 'Position list'],
      ['assets/kemenag-attendance-payroll-features/admin-03-add-position.png', 'Add position form'],
      ['assets/kemenag-attendance-payroll-features/admin-04-edit-position.png', 'Edit position form'],
      ['assets/kemenag-attendance-payroll-features/admin-05-allowances.png', 'Allowance list'],
      ['assets/kemenag-attendance-payroll-features/admin-06-add-allowance.png', 'Add allowance form'],
      ['assets/kemenag-attendance-payroll-features/admin-07-edit-allowance.png', 'Edit allowance form'],
      ['assets/kemenag-attendance-payroll-features/admin-08-employees.png', 'Employee list'],
      ['assets/kemenag-attendance-payroll-features/admin-09-add-employee.png', 'Add employee form'],
      ['assets/kemenag-attendance-payroll-features/admin-10-employee-detail.png', 'Employee detail'],
      ['assets/kemenag-attendance-payroll-features/admin-11-edit-employee.png', 'Edit employee form'],
      ['assets/kemenag-attendance-payroll-features/admin-12-honor.png', 'Honor list'],
      ['assets/kemenag-attendance-payroll-features/admin-13-add-honor.png', 'Add honor form'],
      ['assets/kemenag-attendance-payroll-features/admin-14-attendance-scanner.png', 'Attendance scanner'],
      ['assets/kemenag-attendance-payroll-features/admin-15-attendance-history.png', 'Attendance history list'],
      ['assets/kemenag-attendance-payroll-features/admin-16-add-attendance-history.png', 'Add attendance history form'],
      ['assets/kemenag-attendance-payroll-features/admin-17-attendance-table.png', 'Attendance table'],
      ['assets/kemenag-attendance-payroll-features/admin-18-report-employees.png', 'Employee report'],
      ['assets/kemenag-attendance-payroll-features/admin-19-report-attendance-history.png', 'Attendance history report'],
      ['assets/kemenag-attendance-payroll-features/admin-20-report-monthly-attendance.png', 'Monthly attendance report'],
      ['assets/kemenag-attendance-payroll-features/admin-21-report-employee-salary.png', 'Employee salary report'],
      ['assets/kemenag-attendance-payroll-features/admin-22-report-salary-slip.png', 'Salary slip report'],
      ['assets/kemenag-attendance-payroll-features/admin-23-report-employee-allowance.png', 'Employee allowance report'],
      ['assets/kemenag-attendance-payroll-features/admin-24-report-honor.png', 'Honor report'],
      ['assets/kemenag-attendance-payroll-features/admin-25-report-salary-increase.png', 'Salary increase report'],
      ['assets/kemenag-attendance-payroll-features/admin-26-change-password.png', 'Admin change password'],
      ['assets/kemenag-attendance-payroll-features/employee-01-dashboard.png', 'Employee dashboard'],
      ['assets/kemenag-attendance-payroll-features/employee-02-profile-detail.png', 'Employee profile detail'],
      ['assets/kemenag-attendance-payroll-features/employee-03-change-password.png', 'Employee change password'],
    ],
  },
  'surat-masuk-keluar': {
    title: 'Surat Masuk & Surat Keluar Management System',
    description: 'Role-based correspondence and administration system for managing incoming letters, outgoing letters, dispositions, agendas, archives, inventory, inventory loans, and operational reports.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard with incoming/outgoing letter summaries and recent correspondence tables',
          'Letter code, room, user, agenda, inventory, and inventory-loan management',
          'Add and edit forms for reference data and inventory records',
          'Report center and password management',
        ],
      },
      {
        label: 'Petugas',
        items: [
          'Incoming letter, outgoing letter, and disposition management',
          'Agenda and archive creation, list, and edit workflows',
          'Inventory browsing, loan requests, loan edits, and loan-detail review',
          'Password management for staff accounts',
        ],
      },
      {
        label: 'Pimpinan',
        items: [
          'Leader dashboard and disposition review screens',
          'Report center access for administrative reporting',
          'Account password management',
        ],
      },
    ],
    images: [
      ['assets/surat-masuk-surat-keluar-features/login-01-login-page.png', 'Login page'],
      ['assets/surat-masuk-surat-keluar-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/surat-masuk-surat-keluar-features/admin-02-letter-codes.png', 'Letter code list'],
      ['assets/surat-masuk-surat-keluar-features/admin-03-add-letter-code.png', 'Add letter code form'],
      ['assets/surat-masuk-surat-keluar-features/admin-04-edit-letter-code.png', 'Edit letter code form'],
      ['assets/surat-masuk-surat-keluar-features/admin-05-rooms.png', 'Room list'],
      ['assets/surat-masuk-surat-keluar-features/admin-06-add-room.png', 'Add room form'],
      ['assets/surat-masuk-surat-keluar-features/admin-07-edit-room.png', 'Edit room form'],
      ['assets/surat-masuk-surat-keluar-features/admin-08-users.png', 'User list'],
      ['assets/surat-masuk-surat-keluar-features/admin-09-add-user.png', 'Add user form'],
      ['assets/surat-masuk-surat-keluar-features/admin-10-edit-user.png', 'Edit user form'],
      ['assets/surat-masuk-surat-keluar-features/admin-11-agenda.png', 'Agenda list'],
      ['assets/surat-masuk-surat-keluar-features/admin-12-inventory.png', 'Inventory list'],
      ['assets/surat-masuk-surat-keluar-features/admin-13-add-inventory.png', 'Add inventory form'],
      ['assets/surat-masuk-surat-keluar-features/admin-14-edit-inventory.png', 'Edit inventory form'],
      ['assets/surat-masuk-surat-keluar-features/admin-15-inventory-loans.png', 'Inventory loan list'],
      ['assets/surat-masuk-surat-keluar-features/admin-16-loan-detail.png', 'Inventory loan detail'],
      ['assets/surat-masuk-surat-keluar-features/admin-17-reports.png', 'Report center'],
      ['assets/surat-masuk-surat-keluar-features/admin-18-change-password.png', 'Admin change password'],
      ['assets/surat-masuk-surat-keluar-features/employee-01-dashboard.png', 'Employee dashboard'],
      ['assets/surat-masuk-surat-keluar-features/employee-02-outgoing-letters.png', 'Outgoing letter list'],
      ['assets/surat-masuk-surat-keluar-features/employee-03-add-outgoing-letter.png', 'Add outgoing letter form'],
      ['assets/surat-masuk-surat-keluar-features/employee-04-edit-outgoing-letter.png', 'Edit outgoing letter form'],
      ['assets/surat-masuk-surat-keluar-features/employee-05-incoming-letters.png', 'Incoming letter list'],
      ['assets/surat-masuk-surat-keluar-features/employee-06-add-incoming-letter.png', 'Add incoming letter form'],
      ['assets/surat-masuk-surat-keluar-features/employee-07-edit-incoming-letter.png', 'Edit incoming letter form'],
      ['assets/surat-masuk-surat-keluar-features/employee-08-dispositions.png', 'Disposition letter list'],
      ['assets/surat-masuk-surat-keluar-features/employee-09-add-disposition.png', 'Add disposition form'],
      ['assets/surat-masuk-surat-keluar-features/employee-10-edit-disposition.png', 'Edit disposition form'],
      ['assets/surat-masuk-surat-keluar-features/employee-11-agenda.png', 'Employee agenda list'],
      ['assets/surat-masuk-surat-keluar-features/employee-12-add-agenda.png', 'Add agenda form'],
      ['assets/surat-masuk-surat-keluar-features/employee-13-edit-agenda.png', 'Edit agenda form'],
      ['assets/surat-masuk-surat-keluar-features/employee-14-archives.png', 'Archive list'],
      ['assets/surat-masuk-surat-keluar-features/employee-15-add-archive.png', 'Add archive form'],
      ['assets/surat-masuk-surat-keluar-features/employee-16-edit-archive.png', 'Edit archive form'],
      ['assets/surat-masuk-surat-keluar-features/employee-17-inventory.png', 'Employee inventory list'],
      ['assets/surat-masuk-surat-keluar-features/employee-18-inventory-loans.png', 'Employee inventory loan list'],
      ['assets/surat-masuk-surat-keluar-features/employee-19-add-inventory-loan.png', 'Add inventory loan form'],
      ['assets/surat-masuk-surat-keluar-features/employee-20-edit-inventory-loan.png', 'Edit inventory loan form'],
      ['assets/surat-masuk-surat-keluar-features/employee-21-loan-detail.png', 'Employee inventory loan detail'],
      ['assets/surat-masuk-surat-keluar-features/employee-22-change-password.png', 'Employee change password'],
      ['assets/surat-masuk-surat-keluar-features/leader-01-dashboard.png', 'Leader dashboard'],
      ['assets/surat-masuk-surat-keluar-features/leader-02-dispositions.png', 'Leader disposition list'],
      ['assets/surat-masuk-surat-keluar-features/leader-03-edit-disposition.png', 'Leader disposition detail/edit'],
      ['assets/surat-masuk-surat-keluar-features/leader-04-reports.png', 'Leader report center'],
      ['assets/surat-masuk-surat-keluar-features/leader-05-change-password.png', 'Leader change password'],
    ],
  },
  'majelis-kopi': {
    title: 'Majelis Kopi Sales & Inventory Management System',
    description: 'Coffee shop operations system for Majelis Kopi covering POS transactions, menu and raw-material inventory, suppliers, cashier attendance and payroll, asset tracking, customer management, and operational reports.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard with menu, cashier, supplier, customer, yearly chart, and favorite-menu summaries',
          'Admin and cashier account management with cashier profile, attendance, payroll, and password screens',
          'Asset, menu category, menu item, raw material, stock, supplier, and supply management',
          'Sales, customer, favorite menu, finance, supplier, supply, and asset reports',
        ],
      },
      {
        label: 'Cashier',
        items: [
          'POS screen with categorized menu browsing and order draft controls',
          'Sales history and sales-detail review',
          'Raw-material stock visibility and customer management',
          'Cash register and password management screens',
        ],
      },
      {
        label: 'Customer',
        items: [
          'Cashier-style access for the customer provided with the project',
          'POS, sales history, and customer-management views captured separately',
        ],
      },
    ],
    images: [
      ['assets/majelis-kopi-features/login-01-login-page.png', 'Login page'],
      ['assets/majelis-kopi-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/majelis-kopi-features/admin-02-admin-users.png', 'Admin user list'],
      ['assets/majelis-kopi-features/admin-03-add-admin.png', 'Add admin form'],
      ['assets/majelis-kopi-features/admin-04-edit-admin.png', 'Edit admin form'],
      ['assets/majelis-kopi-features/admin-05-cashier-users.png', 'Cashier user list'],
      ['assets/majelis-kopi-features/admin-06-add-cashier.png', 'Add cashier form'],
      ['assets/majelis-kopi-features/admin-07-cashier-detail.png', 'Cashier detail'],
      ['assets/majelis-kopi-features/admin-08-edit-cashier.png', 'Edit cashier form'],
      ['assets/majelis-kopi-features/admin-09-assets.png', 'Asset list'],
      ['assets/majelis-kopi-features/admin-10-add-asset.png', 'Add asset form'],
      ['assets/majelis-kopi-features/admin-11-asset-detail.png', 'Asset detail'],
      ['assets/majelis-kopi-features/admin-12-edit-asset.png', 'Edit asset form'],
      ['assets/majelis-kopi-features/admin-13-add-asset-addition.png', 'Add asset addition form'],
      ['assets/majelis-kopi-features/admin-14-asset-additions.png', 'Asset addition history'],
      ['assets/majelis-kopi-features/admin-15-edit-asset-addition.png', 'Edit asset addition form'],
      ['assets/majelis-kopi-features/admin-16-add-asset-reduction.png', 'Add asset reduction form'],
      ['assets/majelis-kopi-features/admin-17-asset-reductions.png', 'Asset reduction history'],
      ['assets/majelis-kopi-features/admin-18-edit-asset-reduction.png', 'Edit asset reduction form'],
      ['assets/majelis-kopi-features/admin-19-menu-categories.png', 'Menu category list'],
      ['assets/majelis-kopi-features/admin-20-add-menu-category.png', 'Add menu category form'],
      ['assets/majelis-kopi-features/admin-21-edit-menu-category.png', 'Edit menu category form'],
      ['assets/majelis-kopi-features/admin-22-attendance.png', 'Cashier attendance summary'],
      ['assets/majelis-kopi-features/admin-23-attendance-detail.png', 'Cashier attendance detail'],
      ['assets/majelis-kopi-features/admin-24-add-attendance.png', 'Add attendance form'],
      ['assets/majelis-kopi-features/admin-25-edit-attendance.png', 'Edit attendance form'],
      ['assets/majelis-kopi-features/admin-26-payroll.png', 'Payroll summary'],
      ['assets/majelis-kopi-features/admin-27-payroll-detail.png', 'Payroll detail'],
      ['assets/majelis-kopi-features/admin-28-raw-materials.png', 'Raw material list'],
      ['assets/majelis-kopi-features/admin-29-add-raw-material.png', 'Add raw material form'],
      ['assets/majelis-kopi-features/admin-30-edit-raw-material.png', 'Edit raw material form'],
      ['assets/majelis-kopi-features/admin-31-raw-stock.png', 'Raw material stock'],
      ['assets/majelis-kopi-features/admin-32-suppliers.png', 'Supplier list'],
      ['assets/majelis-kopi-features/admin-33-add-supplier.png', 'Add supplier form'],
      ['assets/majelis-kopi-features/admin-34-edit-supplier.png', 'Edit supplier form'],
      ['assets/majelis-kopi-features/admin-35-add-supply.png', 'Add supply form'],
      ['assets/majelis-kopi-features/admin-36-supplies.png', 'Supply history'],
      ['assets/majelis-kopi-features/admin-37-edit-supply.png', 'Edit supply form'],
      ['assets/majelis-kopi-features/admin-38-menu-category-browser.png', 'Menu category browser'],
      ['assets/majelis-kopi-features/admin-39-menu-by-category.png', 'Menu by category'],
      ['assets/majelis-kopi-features/admin-40-add-menu.png', 'Add menu form'],
      ['assets/majelis-kopi-features/admin-41-edit-menu.png', 'Edit menu form'],
      ['assets/majelis-kopi-features/admin-42-favorite-menu.png', 'Favorite menu list'],
      ['assets/majelis-kopi-features/admin-43-sales-history.png', 'Sales history'],
      ['assets/majelis-kopi-features/admin-44-sales-detail.png', 'Sales detail'],
      ['assets/majelis-kopi-features/admin-45-customers.png', 'Customer list'],
      ['assets/majelis-kopi-features/admin-46-customer-detail.png', 'Customer detail'],
      ['assets/majelis-kopi-features/admin-47-add-customer.png', 'Add customer form'],
      ['assets/majelis-kopi-features/admin-48-edit-customer.png', 'Edit customer form'],
      ['assets/majelis-kopi-features/admin-49-report-cashier.png', 'Cashier report'],
      ['assets/majelis-kopi-features/admin-50-report-menu.png', 'Menu report'],
      ['assets/majelis-kopi-features/admin-51-report-favorite-menu.png', 'Favorite menu report'],
      ['assets/majelis-kopi-features/admin-52-report-favorite-chart.png', 'Favorite menu chart report'],
      ['assets/majelis-kopi-features/admin-53-report-sales.png', 'Sales report'],
      ['assets/majelis-kopi-features/admin-54-report-suppliers.png', 'Supplier report'],
      ['assets/majelis-kopi-features/admin-55-report-supplies.png', 'Raw material supply report'],
      ['assets/majelis-kopi-features/admin-56-report-finance.png', 'Finance report'],
      ['assets/majelis-kopi-features/admin-57-report-asset-additions.png', 'Asset addition report'],
      ['assets/majelis-kopi-features/admin-58-report-asset-reductions.png', 'Asset reduction report'],
      ['assets/majelis-kopi-features/admin-59-change-password.png', 'Admin change password'],
      ['assets/majelis-kopi-features/cashier-01-pos.png', 'Cashier POS'],
      ['assets/majelis-kopi-features/cashier-02-pos-with-order.png', 'Cashier POS with order draft'],
      ['assets/majelis-kopi-features/cashier-03-sales-history.png', 'Cashier sales history'],
      ['assets/majelis-kopi-features/cashier-04-sales-detail.png', 'Cashier sales detail'],
      ['assets/majelis-kopi-features/cashier-05-stock.png', 'Cashier raw stock'],
      ['assets/majelis-kopi-features/cashier-06-customers.png', 'Cashier customer list'],
      ['assets/majelis-kopi-features/cashier-07-customer-detail.png', 'Cashier customer detail'],
      ['assets/majelis-kopi-features/cashier-08-add-customer.png', 'Cashier add customer form'],
      ['assets/majelis-kopi-features/cashier-09-edit-customer.png', 'Cashier edit customer form'],
      ['assets/majelis-kopi-features/cashier-10-cash.png', 'Cashier cash register'],
      ['assets/majelis-kopi-features/cashier-11-change-password.png', 'Cashier change password'],
      ['assets/majelis-kopi-features/customer-01-pos.png', 'Customer POS view'],
      ['assets/majelis-kopi-features/customer-02-sales-history.png', 'Customer sales history'],
      ['assets/majelis-kopi-features/customer-03-customers.png', 'Customer customer management'],
    ],
  },
  'zamrud-jewellery': {
    title: 'The Zamrud Jewellery Warehouse',
    description: 'Warehouse and retail operations system for jewellery inventory, supplier intake, store distribution, exhibition sales, store sales, returns, and operational reporting.',
    features: [
      {
        label: 'Admin',
        items: [
          'Admin, warehouse employee, and store employee account management',
          'Payment type, item type, item inventory, store, and supplier master data',
          'Supply, distribution, supplier return, exhibition, exhibition sales, and store sales workflows',
          'Operational reports for inventory, distribution, supply, returns, exhibitions, sales, and finance',
        ],
      },
      {
        label: 'Warehouse Employee',
        items: [
          'Inventory browsing and item-by-type views',
          'Store distribution, supplier intake, supplier return, and exhibition management',
          'Exhibition sale recording and report access',
        ],
      },
      {
        label: 'Store Employee',
        items: [
          'Store dashboard and item list access',
          'Store sales list, sales entry form, and sales detail pages',
          'Account password management',
        ],
      },
    ],
    images: [
      ['assets/zamrud-jewellery-features/login-01-login-page.png', 'Login page'],
      ['assets/zamrud-jewellery-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/zamrud-jewellery-features/admin-02-admin-users.png', 'Admin user list'],
      ['assets/zamrud-jewellery-features/admin-03-add-admin.png', 'Add admin form'],
      ['assets/zamrud-jewellery-features/admin-04-warehouse-employees.png', 'Warehouse employee list'],
      ['assets/zamrud-jewellery-features/admin-05-add-warehouse-employee.png', 'Add warehouse employee form'],
      ['assets/zamrud-jewellery-features/admin-06-store-employees.png', 'Store employee list'],
      ['assets/zamrud-jewellery-features/admin-07-add-store-employee.png', 'Add store employee form'],
      ['assets/zamrud-jewellery-features/admin-08-payment-types.png', 'Payment type list'],
      ['assets/zamrud-jewellery-features/admin-09-add-payment-type.png', 'Add payment type form'],
      ['assets/zamrud-jewellery-features/admin-10-item-types.png', 'Item type list'],
      ['assets/zamrud-jewellery-features/admin-11-add-item-type.png', 'Add item type form'],
      ['assets/zamrud-jewellery-features/admin-12-items-list.png', 'Item inventory list'],
      ['assets/zamrud-jewellery-features/admin-13-items-by-type.png', 'Items by type'],
      ['assets/zamrud-jewellery-features/admin-14-add-item.png', 'Add item form'],
      ['assets/zamrud-jewellery-features/admin-15-stores.png', 'Store list'],
      ['assets/zamrud-jewellery-features/admin-16-store-item-types.png', 'Store item type view'],
      ['assets/zamrud-jewellery-features/admin-17-store-items.png', 'Store item stock view'],
      ['assets/zamrud-jewellery-features/admin-18-add-store.png', 'Add store form'],
      ['assets/zamrud-jewellery-features/admin-19-distribution-list.png', 'Distribution list'],
      ['assets/zamrud-jewellery-features/admin-20-distribution-detail.png', 'Distribution detail'],
      ['assets/zamrud-jewellery-features/admin-21-add-distribution.png', 'Add distribution form'],
      ['assets/zamrud-jewellery-features/admin-22-suppliers.png', 'Supplier list'],
      ['assets/zamrud-jewellery-features/admin-23-add-supplier.png', 'Add supplier form'],
      ['assets/zamrud-jewellery-features/admin-24-supply-list.png', 'Supply list'],
      ['assets/zamrud-jewellery-features/admin-25-supply-detail.png', 'Supply detail'],
      ['assets/zamrud-jewellery-features/admin-26-add-supply.png', 'Add supply form'],
      ['assets/zamrud-jewellery-features/admin-27-return-list.png', 'Supplier return list'],
      ['assets/zamrud-jewellery-features/admin-28-return-detail.png', 'Supplier return detail'],
      ['assets/zamrud-jewellery-features/admin-29-add-return.png', 'Add supplier return form'],
      ['assets/zamrud-jewellery-features/admin-30-exhibitions.png', 'Exhibition list'],
      ['assets/zamrud-jewellery-features/admin-31-exhibition-detail.png', 'Exhibition detail'],
      ['assets/zamrud-jewellery-features/admin-32-add-exhibition.png', 'Add exhibition form'],
      ['assets/zamrud-jewellery-features/admin-33-add-exhibition-sale.png', 'Add exhibition sale form'],
      ['assets/zamrud-jewellery-features/admin-34-exhibition-sale-detail.png', 'Exhibition sale detail'],
      ['assets/zamrud-jewellery-features/admin-35-store-sales.png', 'Store sales list'],
      ['assets/zamrud-jewellery-features/admin-36-store-sale-detail.png', 'Store sale detail'],
      ['assets/zamrud-jewellery-features/admin-37-add-store-sale.png', 'Add store sale form'],
      ['assets/zamrud-jewellery-features/admin-38-report-items.png', 'Item report'],
      ['assets/zamrud-jewellery-features/admin-39-report-distribution.png', 'Distribution report'],
      ['assets/zamrud-jewellery-features/admin-40-report-store-sales.png', 'Store sales report'],
      ['assets/zamrud-jewellery-features/admin-41-report-supply.png', 'Supply report'],
      ['assets/zamrud-jewellery-features/admin-42-report-returns.png', 'Supplier return report'],
      ['assets/zamrud-jewellery-features/admin-43-report-exhibitions.png', 'Exhibition report'],
      ['assets/zamrud-jewellery-features/admin-44-report-exhibition-sales.png', 'Exhibition sales report'],
      ['assets/zamrud-jewellery-features/admin-45-report-finance.png', 'Finance report'],
      ['assets/zamrud-jewellery-features/admin-46-change-password.png', 'Admin change password'],
      ['assets/zamrud-jewellery-features/warehouse-01-dashboard.png', 'Warehouse dashboard'],
      ['assets/zamrud-jewellery-features/warehouse-02-items-list.png', 'Warehouse item list'],
      ['assets/zamrud-jewellery-features/warehouse-03-items-by-type.png', 'Warehouse items by type'],
      ['assets/zamrud-jewellery-features/warehouse-04-distribution-list.png', 'Warehouse distribution list'],
      ['assets/zamrud-jewellery-features/warehouse-05-distribution-detail.png', 'Warehouse distribution detail'],
      ['assets/zamrud-jewellery-features/warehouse-06-add-distribution.png', 'Warehouse add distribution form'],
      ['assets/zamrud-jewellery-features/warehouse-07-supply-list.png', 'Warehouse supply list'],
      ['assets/zamrud-jewellery-features/warehouse-08-supply-detail.png', 'Warehouse supply detail'],
      ['assets/zamrud-jewellery-features/warehouse-09-add-supply.png', 'Warehouse add supply form'],
      ['assets/zamrud-jewellery-features/warehouse-10-return-list.png', 'Warehouse supplier return list'],
      ['assets/zamrud-jewellery-features/warehouse-11-return-detail.png', 'Warehouse supplier return detail'],
      ['assets/zamrud-jewellery-features/warehouse-12-add-return.png', 'Warehouse add supplier return form'],
      ['assets/zamrud-jewellery-features/warehouse-13-exhibitions.png', 'Warehouse exhibition list'],
      ['assets/zamrud-jewellery-features/warehouse-14-exhibition-detail.png', 'Warehouse exhibition detail'],
      ['assets/zamrud-jewellery-features/warehouse-15-add-exhibition.png', 'Warehouse add exhibition form'],
      ['assets/zamrud-jewellery-features/warehouse-16-add-exhibition-sale.png', 'Warehouse add exhibition sale form'],
      ['assets/zamrud-jewellery-features/warehouse-17-exhibition-sale-detail.png', 'Warehouse exhibition sale detail'],
      ['assets/zamrud-jewellery-features/warehouse-18-report-items.png', 'Warehouse item report'],
      ['assets/zamrud-jewellery-features/warehouse-19-report-distribution.png', 'Warehouse distribution report'],
      ['assets/zamrud-jewellery-features/warehouse-20-report-store-sales.png', 'Warehouse store sales report'],
      ['assets/zamrud-jewellery-features/warehouse-21-report-supply.png', 'Warehouse supply report'],
      ['assets/zamrud-jewellery-features/warehouse-22-report-returns.png', 'Warehouse supplier return report'],
      ['assets/zamrud-jewellery-features/warehouse-23-report-exhibitions.png', 'Warehouse exhibition report'],
      ['assets/zamrud-jewellery-features/warehouse-24-report-exhibition-sales.png', 'Warehouse exhibition sales report'],
      ['assets/zamrud-jewellery-features/warehouse-25-report-finance.png', 'Warehouse finance report'],
      ['assets/zamrud-jewellery-features/warehouse-26-change-password.png', 'Warehouse change password'],
      ['assets/zamrud-jewellery-features/store-01-dashboard.png', 'Store employee dashboard'],
      ['assets/zamrud-jewellery-features/store-02-items-list.png', 'Store item list'],
      ['assets/zamrud-jewellery-features/store-03-store-sales.png', 'Store sales list'],
      ['assets/zamrud-jewellery-features/store-04-add-store-sale.png', 'Store sales entry form'],
      ['assets/zamrud-jewellery-features/store-05-store-sale-detail.png', 'Store sale detail'],
      ['assets/zamrud-jewellery-features/store-06-change-password.png', 'Store change password'],
    ],
  },
};

const locale = document.documentElement.lang.toLowerCase().startsWith('id') ? 'id' : 'en';
const isIndonesian = locale === 'id';

const uiCopy = {
  en: {
    closeFeatureView: 'Close feature view',
    closePreview: 'Close preview',
    filterScreenshots: 'Filter screenshots',
    nextFeatureScreenshot: 'Next feature screenshot',
    nextPreview: 'Next preview',
    openFullView: (altText) => `Open ${altText} full view`,
    openSelectedScreenshot: 'Open selected screenshot full view',
    previousFeatureScreenshot: 'Previous feature screenshot',
    previousPreview: 'Previous preview',
    projectFeatureSummary: 'Project feature summary',
    projectPreviewImage: 'Project preview image',
    screenshotPreview: 'Screenshot preview',
    screenshotThumbnails: 'Screenshot thumbnails',
    screenshots: 'Project screenshots',
    showImage: (altText) => `Show ${altText}`,
  },
  id: {
    closeFeatureView: 'Tutup tampilan fitur',
    closePreview: 'Tutup pratinjau',
    filterScreenshots: 'Filter screenshot',
    nextFeatureScreenshot: 'Screenshot fitur berikutnya',
    nextPreview: 'Pratinjau berikutnya',
    openFullView: (altText) => `Buka ${altText} dalam tampilan penuh`,
    openSelectedScreenshot: 'Buka screenshot terpilih dalam tampilan penuh',
    previousFeatureScreenshot: 'Screenshot fitur sebelumnya',
    previousPreview: 'Pratinjau sebelumnya',
    projectFeatureSummary: 'Ringkasan fitur proyek',
    projectPreviewImage: 'Gambar pratinjau proyek',
    screenshotPreview: 'Pratinjau screenshot',
    screenshotThumbnails: 'Thumbnail screenshot',
    screenshots: 'Screenshot proyek',
    showImage: (altText) => `Tampilkan ${altText}`,
  },
};

const featureGroupLabels = {
  en: {},
  id: {
    All: 'Semua',
    Admin: 'Admin',
    Employee: 'Pegawai',
    Staff: 'Petugas',
    Teacher: 'Guru',
    Student: 'Siswa',
    Warehouse: 'Gudang',
    Store: 'Toko',
    Cashier: 'Kasir',
    School: 'Sekolah',
    Guest: 'Tamu',
    Public: 'Publik',
    Access: 'Akses',
    Reports: 'Laporan',
    Other: 'Lainnya',
  },
};

const copy = uiCopy[locale];

const getFeatureGroupLabel = (group) => featureGroupLabels[locale][group] || group;

const localizedFeatureProjects = {
  id: {
    'office-asset': {
      title: 'Sistem Manajemen Aset & Inventaris Kantor (BPTP KALSEL)',
      description: 'Sistem pelacakan aset internal end-to-end untuk BPTP KALSEL, mencakup data aset, laporan kondisi, maintenance, peminjaman, pengembalian, dan alur self-service pegawai.',
      features: [
        {
          label: 'Admin',
          items: [
            'Manajemen akun pegawai dan pengguna',
            'Manajemen jenis aset, kategori, inventaris, dan detail aset',
            'Pelacakan penambahan aset, aset rusak, aset hilang, dan maintenance',
            'Verifikasi permintaan peminjaman dan pengembalian',
            'Laporan operasional untuk aset, penambahan, aset rusak/hilang, peminjaman, pengembalian, maintenance, kondisi, dan pegawai',
          ],
        },
        {
          label: 'Pegawai',
          items: [
            'Menelusuri jenis aset, kategori, dan aset yang tersedia',
            'Mengajukan permintaan peminjaman aset',
            'Melacak riwayat peminjaman dan detail permintaan',
            'Mengajukan pengembalian dan meninjau riwayat pengembalian',
          ],
        },
      ],
    },
    'school-management': {
      title: 'Sistem Manajemen & Penilaian Sekolah Digital',
      description: 'Sistem operasional sekolah multi-peran yang mencakup aktivitas kelas, buku digital, tugas, absensi, penilaian, laporan, dan workflow perkembangan siswa.',
      features: [
        {
          label: 'Admin',
          items: [
            'Manajemen dashboard, admin, kelas, semester, mata pelajaran, guru, dan siswa',
            'Perpustakaan buku digital dan halaman detail buku',
            'Manajemen siswa dan mata pelajaran pada kelas aktif',
            'Input nilai dan layar laporan akademik',
            'Laporan siswa, absensi guru, kelas aktif, dan grafik gender',
          ],
        },
        {
          label: 'Guru',
          items: [
            'Dashboard kelas dan perangkat mata pelajaran',
            'Detail absensi dan input kehadiran',
            'Penilaian tugas dan input nilai rapor',
            'Ranking wali kelas dan akses buku digital',
          ],
        },
        {
          label: 'Siswa',
          items: [
            'Dashboard kelas',
            'Catatan kehadiran',
            'Forum diskusi',
            'Tugas dan buku digital',
          ],
        },
      ],
    },
    'kostel-reservation': {
      title: 'Platform Reservasi & Operasional Kostel',
      description: 'Sistem reservasi dan operasional kostel yang mencakup inventaris kamar, reservasi, check-in, check-out, workflow layanan pegawai, kuitansi, dan laporan operasional.',
      features: [
        {
          label: 'Admin',
          items: [
            'Manajemen akun admin dan pegawai',
            'Manajemen tipe kamar, harga, fasilitas, dan inventaris kamar',
            'Workflow reservasi, check-in, check-out, dan kuitansi',
            'Laporan reservasi, check-in, check-out, kamar tersedia, pegawai, aktivitas layanan, grafik, dan keuangan',
          ],
        },
        {
          label: 'Pegawai',
          items: [
            'Daftar reservasi dan entri reservasi',
            'Daftar check-in dan entri check-in walk-in',
            'Riwayat check-out dan manajemen kata sandi',
          ],
        },
      ],
    },
    'buku-tamu': {
      title: 'Sistem Buku Tamu Digital & Manajemen Pengunjung (DARPUSDA Banjarbaru)',
      description: 'Sistem manajemen pengunjung untuk DARPUSDA Banjarbaru yang mencakup check-in/out tamu, data pengunjung, master data ruangan dan rak buku, jadwal petugas, event, agenda, permintaan kunjungan sekolah, dokumen, dan laporan.',
      features: [
        {
          label: 'Admin',
          items: [
            'Dashboard statistik pengunjung dan tren kunjungan',
            'Manajemen data tamu, akun pengguna, ruangan, rak buku, jadwal petugas, event, dan agenda',
            'Alur persetujuan agenda untuk kunjungan sekolah, event, dan aktivitas internal',
            'Generator laporan untuk tamu, kunjungan sekolah, event, agenda, ruangan, rak buku, tipe pengunjung, total kunjungan, dan aktivitas petugas',
          ],
        },
        {
          label: 'Petugas',
          items: [
            'Form check-in dan check-out tamu',
            'Riwayat tamu, detail tamu, dan layar edit tamu',
            'Manajemen agenda dan workflow pelacakan dokumen',
          ],
        },
        {
          label: 'Sekolah',
          items: [
            'Registrasi dan login akun sekolah',
            'Daftar permintaan kunjungan untuk agenda sekolah yang diajukan',
            'Form permintaan kunjungan sekolah dan manajemen kata sandi',
          ],
        },
      ],
    },
    'buku-tamu-bps': {
      title: 'Buku Tamu BPS HSU',
      description: 'Sistem buku tamu dan manajemen janji untuk BPS Hulu Sungai Utara yang mencakup kunjungan langsung, akun tamu, permintaan janji online, master data pegawai dan divisi, laporan, serta penilaian kepuasan IKM.',
      features: [
        {
          label: 'Admin',
          items: [
            'Dashboard dengan counter pengunjung dan kunjungan terbaru',
            'Manajemen data kunjungan tamu, detail permintaan online, divisi, pegawai, pengguna internal, dan pendaftar akun tamu',
            'Generator laporan untuk kunjungan, permintaan kunjungan, pegawai, akun tamu, registrasi akun, IKM, grafik tipe kunjungan, grafik pengunjung, dan grafik IKM',
            'Manajemen profil dan kata sandi',
          ],
        },
        {
          label: 'Petugas',
          items: [
            'Form buku tamu front-desk untuk kunjungan langsung',
            'Pengelolaan data kunjungan tamu dan detail permintaan',
            'Manajemen akun tamu dan penanganan permintaan lupa kata sandi',
            'Manajemen profil dan kata sandi',
          ],
        },
        {
          label: 'Tamu',
          items: [
            'Dashboard tamu dan form permintaan kunjungan',
            'Riwayat kunjungan pribadi, detail, dan layar edit permintaan',
            'Manajemen profil dan perubahan kata sandi',
            'Halaman publik penilaian kepuasan IKM setelah kunjungan selesai',
          ],
        },
      ],
    },
    'buku-tamu-perpustakaan-bptp': {
      title: 'Buku Tamu Perpustakaan BPTP KALSEL',
      description: 'Buku tamu perpustakaan digital untuk BPTP KALSEL yang mencakup input pengunjung, field khusus profesi, riwayat kunjungan yang dapat dicari, pencarian detail pengunjung, dan pelacakan timestamp ekspor.',
      features: [
        {
          label: 'Input Pengunjung',
          items: [
            'Landing page dengan akses langsung ke form tamu dan riwayat kunjungan',
            'Form identitas tamu dengan tanggal kunjungan dan waktu kunjungan live',
            'Field khusus profesi untuk pengunjung umum, mahasiswa, dan pegawai BPTP',
            'Pilihan topik dan catatan tujuan kunjungan dengan validasi form dan notifikasi',
          ],
        },
        {
          label: 'Riwayat Kunjungan',
          items: [
            'Tabel riwayat pengunjung dengan informasi profesi, topik, dan tanggal kunjungan',
            'Pencarian berdasarkan nama pengunjung, rentang tanggal, profesi, dan topik',
            'Modal detail pengunjung termasuk data universitas atau divisi jika tersedia',
            'Aksi ekspor Excel dengan pelacakan timestamp unduhan terakhir',
          ],
        },
      ],
    },
    'cell-phone-store': {
      title: 'Cell Phone Store',
      description: 'Sistem operasional retail untuk mengelola inventaris aksesoris ponsel, deposit saldo, produk pulsa dan top-up, transaksi penjualan, pergerakan stok, serta master data staf/admin.',
      availability: 'Demo live belum di-host secara publik. Screenshot fitur tersedia di bawah.',
      features: [
        {
          label: 'Master Data',
          items: [
            'Manajemen admin, pegawai, dan tipe barang',
            'Workflow modal tambah dan edit untuk data referensi',
            'Tabel pencarian untuk data inti toko',
          ],
        },
        {
          label: 'Inventaris & Penjualan',
          items: [
            'Katalog barang yang dikelompokkan berdasarkan tipe dengan tampilan accordion',
            'Modal stok masuk dan penjualan barang dari setiap baris barang',
            'Riwayat transaksi barang masuk dan keluar',
          ],
        },
        {
          label: 'Produk Digital & Saldo',
          items: [
            'Ringkasan saldo saat ini dengan tabel produk pulsa dan top-up',
            'Riwayat deposit saldo serta alur tambah/edit',
            'Riwayat penjualan pulsa dan top-up dengan harga dan workflow edit',
          ],
        },
      ],
    },
    'bank-kalsel-agunan': {
      title: 'Sistem Manajemen Dokumen Agunan Bank Kalsel',
      description: 'Sistem arsip dokumen agunan berbasis peran untuk Bank Kalsel yang mencakup data nasabah, data pegawai, slot penyimpanan kabinet, registrasi dokumen agunan, peminjaman dokumen, dan laporan operasional.',
      availability: 'Demo live belum di-host secara publik. Screenshot fitur tersedia di bawah.',
      features: [
        {
          label: 'Manajemen Arsip',
          items: [
            'Dashboard ringkasan untuk nasabah, kabinet, dokumen agunan, dan pegawai',
            'Halaman master data nasabah dan pegawai dengan alur tambah, detail, dan edit saat data tersedia',
            'Manajemen kabinet dan slot penyimpanan untuk lokasi fisik dokumen agunan',
            'Form registrasi dokumen agunan dengan jenis kredit, jenis agunan, lokasi penyimpanan, status, tanggal, catatan, dan unggah file',
          ],
        },
        {
          label: 'Workflow Peminjaman',
          items: [
            'Daftar dokumen agunan dan daftar peminjaman untuk melacak pergerakan dokumen',
            'Form pembuatan pinjaman untuk memilih dokumen, peminjam, tanggal pinjam, tanggal kembali, dan tujuan',
            'Dashboard peran pegawai dan layar akses dokumen',
          ],
        },
        {
          label: 'Laporan',
          items: [
            'Laporan daftar agunan, status verifikasi, dan masa berlaku',
            'Laporan peminjaman dan pengembalian, lokasi dokumen, dan ketersediaan penyimpanan',
            'Laporan nasabah dan pegawai dengan alur cetak',
            'Manajemen kata sandi untuk akun pengguna',
          ],
        },
      ],
    },
    'ptsp-kemenag': {
      title: 'Sistem Manajemen Layanan PTSP Kemenag',
      description: 'Platform layanan terpadu satu pintu untuk Kemenag yang mencakup penerimaan permohonan publik, manajemen pegawai dan master data, pengajuan internal staf, verifikasi permohonan publik, dan laporan administratif.',
      availability: 'Demo live belum di-host secara publik. Screenshot fitur tersedia di bawah.',
      features: [
        {
          label: 'Layanan Publik',
          items: [
            'Landing page PTSP publik untuk memilih jenis permohonan layanan',
            'Form permohonan online untuk magang/PKL, pengukuran kiblat, pendaftaran tempat ibadah, dan riset',
            'Alur intake layanan yang dirancang untuk pemohon publik tanpa akses admin',
          ],
        },
        {
          label: 'Admin & Master Data',
          items: [
            'Dashboard admin dan area manajemen pegawai',
            'Master data pangkat, golongan, jabatan, biaya perjalanan, tempat ibadah, jenis cuti, jenis transportasi, dan jenis izin',
            'Form tambah dan edit untuk manajemen data referensi',
            'Manajemen kata sandi admin',
          ],
        },
        {
          label: 'Pengajuan & Laporan',
          items: [
            'Antrean pengajuan internal untuk cuti, fasilitas, surat perjalanan dinas, dan izin',
            'Antrean permohonan publik untuk registrasi tempat ibadah, riset, magang/PKL, dan pengukuran kiblat',
            'Layar laporan dengan filter dan aksi cetak untuk pengajuan internal dan permohonan publik',
          ],
        },
      ],
    },
    'kemenag-attendance-payroll': {
      title: 'Sistem Absensi & Payroll Kemenag Tapin',
      description: 'Sistem absensi dan payroll berbasis peran untuk Kemenag Tapin yang mencakup master data pegawai, pengaturan jabatan dan tunjangan, absensi berbasis QR, honor, laporan payroll, dan self-service pegawai.',
      availability: 'Demo live belum di-host secara publik. Screenshot fitur tersedia di bawah.',
      features: [
        {
          label: 'Admin',
          items: [
            'Dashboard ringkasan untuk operasional pegawai, absensi, dan payroll',
            'Modul manajemen jabatan, tunjangan, pegawai, dan honor',
            'Layar tambah, edit, dan detail untuk administrasi pegawai',
            'Manajemen kata sandi untuk akun administrator',
          ],
        },
        {
          label: 'Absensi & Payroll',
          items: [
            'Scanner absensi QR dan workflow entri riwayat absensi',
            'Tampilan tabel absensi untuk pemantauan harian dan bulanan',
            'Laporan pegawai, riwayat absensi, absensi bulanan, gaji, tunjangan, honor, dan kenaikan gaji',
            'Alur laporan slip gaji untuk dokumentasi payroll pegawai individual',
          ],
        },
        {
          label: 'Pegawai',
          items: [
            'Dashboard pegawai untuk akses sesuai peran',
            'Detail profil self-service dengan informasi identitas, pekerjaan, gaji, tunjangan, dan QR code',
            'Manajemen kata sandi pegawai',
          ],
        },
      ],
    },
    'surat-masuk-keluar': {
      title: 'Sistem Manajemen Surat Masuk & Surat Keluar',
      description: 'Sistem persuratan dan administrasi berbasis peran untuk mengelola surat masuk, surat keluar, disposisi, agenda, arsip, inventaris, peminjaman inventaris, dan laporan operasional.',
      availability: 'Demo live belum di-host secara publik. Screenshot fitur tersedia di bawah.',
      features: [
        {
          label: 'Admin',
          items: [
            'Dashboard dengan ringkasan surat masuk/keluar dan tabel persuratan terbaru',
            'Manajemen kode surat, ruangan, pengguna, agenda, inventaris, dan peminjaman inventaris',
            'Form tambah dan edit untuk data referensi dan data inventaris',
            'Pusat laporan dan manajemen kata sandi',
          ],
        },
        {
          label: 'Petugas',
          items: [
            'Manajemen surat masuk, surat keluar, dan disposisi',
            'Pembuatan, daftar, dan edit agenda serta arsip',
            'Penelusuran inventaris, permintaan pinjaman, edit pinjaman, dan peninjauan detail pinjaman',
            'Manajemen kata sandi akun petugas',
          ],
        },
        {
          label: 'Pimpinan',
          items: [
            'Dashboard pimpinan dan layar peninjauan disposisi',
            'Akses pusat laporan untuk pelaporan administratif',
            'Manajemen kata sandi akun',
          ],
        },
      ],
    },
    'majelis-kopi': {
      title: 'Sistem Penjualan & Inventaris Majelis Kopi',
      description: 'Sistem operasional coffee shop untuk Majelis Kopi yang mencakup transaksi POS, inventaris menu dan bahan baku, pemasok, absensi dan payroll kasir, pelacakan aset, manajemen pelanggan, dan laporan operasional.',
      features: [
        {
          label: 'Admin',
          items: [
            'Dashboard dengan ringkasan menu, kasir, pemasok, pelanggan, grafik tahunan, dan menu favorit',
            'Manajemen akun admin dan kasir dengan profil kasir, absensi, payroll, dan layar kata sandi',
            'Manajemen aset, kategori menu, item menu, bahan baku, stok, pemasok, dan supply',
            'Laporan penjualan, pelanggan, menu favorit, keuangan, pemasok, supply, dan aset',
          ],
        },
        {
          label: 'Kasir',
          items: [
            'Layar POS dengan penelusuran menu berdasarkan kategori dan kontrol draft pesanan',
            'Riwayat penjualan dan peninjauan detail penjualan',
            'Visibilitas stok bahan baku dan manajemen pelanggan',
            'Layar kas dan manajemen kata sandi',
          ],
        },
        {
          label: 'Pelanggan',
          items: [
            'Akses bergaya kasir untuk pelanggan yang disediakan dalam proyek',
            'Tampilan POS, riwayat penjualan, dan manajemen pelanggan yang ditangkap terpisah',
          ],
        },
      ],
    },
    'zamrud-jewellery': {
      title: 'Gudang The Zamrud Jewellery',
      description: 'Sistem operasional gudang dan retail untuk inventaris perhiasan, penerimaan pemasok, distribusi toko, penjualan pameran, penjualan toko, retur, dan laporan operasional.',
      features: [
        {
          label: 'Admin',
          items: [
            'Manajemen akun admin, pegawai gudang, dan pegawai toko',
            'Master data jenis pembayaran, jenis barang, inventaris barang, toko, dan pemasok',
            'Workflow supply, distribusi, retur pemasok, pameran, penjualan pameran, dan penjualan toko',
            'Laporan operasional untuk inventaris, distribusi, supply, retur, pameran, penjualan, dan keuangan',
          ],
        },
        {
          label: 'Pegawai Gudang',
          items: [
            'Penelusuran inventaris dan tampilan barang berdasarkan tipe',
            'Manajemen distribusi toko, penerimaan pemasok, retur pemasok, dan pameran',
            'Pencatatan penjualan pameran dan akses laporan',
          ],
        },
        {
          label: 'Pegawai Toko',
          items: [
            'Dashboard toko dan akses daftar barang',
            'Daftar penjualan toko, form entri penjualan, dan halaman detail penjualan',
            'Manajemen kata sandi akun',
          ],
        },
      ],
    },
  },
};

if (isIndonesian) {
  Object.entries(localizedFeatureProjects.id).forEach(([projectKey, localizedProject]) => {
    featureProjects[projectKey] = {
      ...featureProjects[projectKey],
      ...localizedProject,
    };
  });
}

const featureModalState = {
  project: null,
  selectedImage: 0,
  activeGroup: 'All',
  lastFocusedElement: null,
  shouldRestoreFocus: false,
};

const featureImageGroupOrder = [
  'All',
  'Admin',
  'Employee',
  'Staff',
  'Teacher',
  'Student',
  'Warehouse',
  'Store',
  'Cashier',
  'School',
  'Guest',
  'Public',
  'Access',
  'Reports',
  'Other',
];

const getFeatureImageGroup = (src, alt) => {
  const filename = src.split('/').pop() || '';
  const prefix = filename.split('-')[0];
  const searchable = `${src} ${alt}`.toLowerCase();

  if (/\b(report|reports|chart|analytics)\b/.test(searchable)) {
    return 'Reports';
  }

  const prefixGroups = {
    admin: 'Admin',
    employee: 'Employee',
    petugas: 'Staff',
    teacher: 'Teacher',
    student: 'Student',
    warehouse: 'Warehouse',
    store: 'Store',
    cashier: 'Cashier',
    school: 'School',
    guest: 'Guest',
    public: 'Public',
    login: 'Access',
  };

  return prefixGroups[prefix] || 'Other';
};

function initPreviewGalleries() {
  const galleries = document.querySelectorAll('.project-card__preview-gallery');

  galleries.forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll('img'));
    if (slides.length <= 4 || gallery.classList.contains('is-slideshow')) {
      return;
    }

    let currentSlide = 0;
    const controls = document.createElement('div');
    const counter = document.createElement('span');
    const previousButton = document.createElement('button');
    const nextButton = document.createElement('button');

    gallery.classList.add('is-slideshow');
    gallery.setAttribute('role', 'group');
    gallery.setAttribute('aria-roledescription', 'carousel');
    controls.className = 'preview-gallery__controls';
    counter.className = 'preview-gallery__counter';
    counter.setAttribute('aria-live', 'polite');

    previousButton.className = 'preview-gallery__control';
    previousButton.type = 'button';
    previousButton.setAttribute('aria-label', copy.previousPreview);
    previousButton.innerHTML = `
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    `;

    nextButton.className = 'preview-gallery__control';
    nextButton.type = 'button';
    nextButton.setAttribute('aria-label', copy.nextPreview);
    nextButton.innerHTML = `
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    `;

    const setSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentSlide;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));

        if (slide.dataset.lightboxReady === 'true') {
          slide.tabIndex = isActive ? 0 : -1;
        }
      });

      counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    };

    previousButton.addEventListener('click', () => setSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => setSlide(currentSlide + 1));

    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        previousButton.click();
      }

      if (event.key === 'ArrowRight') {
        nextButton.click();
      }
    });

    controls.append(previousButton, counter, nextButton);
    gallery.append(controls);
    setSlide(0);
  });
}

function initPreviewLightbox() {
  const galleries = document.querySelectorAll('.project-card__preview-gallery');
  if (!galleries.length) {
    return;
  }

  let lightbox = document.querySelector('.preview-lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'preview-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', copy.projectPreviewImage);
    lightbox.innerHTML = `
      <button class="preview-lightbox__close" type="button" aria-label="${copy.closePreview}">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <button class="preview-lightbox__nav preview-lightbox__nav--previous" type="button"
        aria-label="${copy.previousPreview}">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <figure class="preview-lightbox__figure">
        <img class="preview-lightbox__image" alt="" />
        <figcaption class="preview-lightbox__caption"></figcaption>
      </figure>
      <button class="preview-lightbox__nav preview-lightbox__nav--next" type="button"
        aria-label="${copy.nextPreview}">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <span class="preview-lightbox__counter" aria-live="polite"></span>
    `;
    document.body.append(lightbox);
  }

  const image = lightbox.querySelector('.preview-lightbox__image');
  const caption = lightbox.querySelector('.preview-lightbox__caption');
  const counter = lightbox.querySelector('.preview-lightbox__counter');
  const closeButton = lightbox.querySelector('.preview-lightbox__close');
  const previousButton = lightbox.querySelector('.preview-lightbox__nav--previous');
  const nextButton = lightbox.querySelector('.preview-lightbox__nav--next');

  const setLightboxImage = (index) => {
    previewLightboxState.currentImage = (index + previewLightboxState.activeImages.length)
      % previewLightboxState.activeImages.length;
    const selectedImage = previewLightboxState.activeImages[previewLightboxState.currentImage];
    const altText = selectedImage.getAttribute('alt') || copy.projectPreviewImage;
    const hasMultipleImages = previewLightboxState.activeImages.length > 1;

    image.src = selectedImage.currentSrc || selectedImage.src;
    image.alt = altText;
    caption.textContent = altText;
    counter.textContent = `${previewLightboxState.currentImage + 1} / ${previewLightboxState.activeImages.length}`;
    previousButton.hidden = !hasMultipleImages;
    nextButton.hidden = !hasMultipleImages;
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.hidden = true;
    document.body.classList.remove('is-lightbox-open');

    if (previewLightboxState.lastFocusedElement) {
      previewLightboxState.lastFocusedElement.focus();
    }
  };

  const openLightbox = (images, index) => {
    previewLightboxState.activeImages = images;
    previewLightboxState.lastFocusedElement = document.activeElement;
    setLightboxImage(index);
    lightbox.hidden = false;
    document.body.classList.add('is-lightbox-open');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
      closeButton.focus();
    });
  };

  window.openPreviewLightbox = openLightbox;

  if (lightbox.dataset.handlersReady !== 'true') {
    previousButton.addEventListener('click', () => {
      setLightboxImage(previewLightboxState.currentImage - 1);
    });
    nextButton.addEventListener('click', () => {
      setLightboxImage(previewLightboxState.currentImage + 1);
    });
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    window.addEventListener('keydown', (event) => {
      if (lightbox.hidden) {
        return;
      }

      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft' && previewLightboxState.activeImages.length > 1) {
        setLightboxImage(previewLightboxState.currentImage - 1);
      }

      if (event.key === 'ArrowRight' && previewLightboxState.activeImages.length > 1) {
        setLightboxImage(previewLightboxState.currentImage + 1);
      }
    });

    lightbox.dataset.handlersReady = 'true';
  }

  galleries.forEach((gallery) => {
    if (gallery.closest('[data-feature-project]')) {
      return;
    }

    const galleryImages = Array.from(gallery.querySelectorAll('img'));

    galleryImages.forEach((galleryImage) => {
      if (galleryImage.dataset.lightboxReady === 'true') {
        return;
      }

      const altText = galleryImage.getAttribute('alt') || copy.projectPreviewImage.toLowerCase();
      const isInactiveSlideshowImage = gallery.classList.contains('is-slideshow')
        && !galleryImage.classList.contains('is-active');

      galleryImage.dataset.lightboxReady = 'true';
      galleryImage.tabIndex = isInactiveSlideshowImage ? -1 : 0;
      galleryImage.setAttribute('role', 'button');
      galleryImage.setAttribute('aria-label', copy.openFullView(altText));

      const openCurrentImage = () => {
        const currentImages = Array.from(gallery.querySelectorAll('img'));
        const selectedIndex = currentImages.indexOf(galleryImage);
        openLightbox(currentImages, selectedIndex >= 0 ? selectedIndex : 0);
      };

      galleryImage.addEventListener('click', openCurrentImage);
      galleryImage.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openCurrentImage();
        }
      });
    });
  });
}

function initFeatureModal() {
  const projectCards = document.querySelectorAll('[data-feature-project]');
  if (!projectCards.length) {
    return;
  }

  let modal = document.querySelector('.feature-modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'feature-modal';
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'feature-modal-title');
    modal.innerHTML = `
      <div class="feature-modal__panel">
        <button class="feature-modal__close" type="button" aria-label="${copy.closeFeatureView}">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div class="feature-modal__body">
          <section class="feature-modal__summary" aria-label="${copy.projectFeatureSummary}">
            <p class="feature-modal__eyebrow">${copy.screenshotPreview}</p>
            <h2 id="feature-modal-title"></h2>
            <p class="feature-modal__description"></p>
            <div class="feature-modal__features"></div>
          </section>
          <section class="feature-modal__gallery" aria-label="${copy.screenshots}">
            <figure class="feature-modal__active-preview">
              <div class="feature-modal__image-shell">
                <button class="feature-modal__step feature-modal__step--previous" type="button"
                  aria-label="${copy.previousFeatureScreenshot}">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button class="feature-modal__image-button" type="button" aria-label="${copy.openSelectedScreenshot}">
                  <img class="feature-modal__active-image" alt="" />
                </button>
                <button class="feature-modal__step feature-modal__step--next" type="button"
                  aria-label="${copy.nextFeatureScreenshot}">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <figcaption class="feature-modal__caption"></figcaption>
            </figure>
            <div class="feature-modal__filters" aria-label="${copy.filterScreenshots}"></div>
            <div class="feature-modal__thumbs" aria-label="${copy.screenshotThumbnails}"></div>
          </section>
        </div>
      </div>
    `;
    document.body.append(modal);
  }

  const panel = modal.querySelector('.feature-modal__panel');
  const title = modal.querySelector('#feature-modal-title');
  const description = modal.querySelector('.feature-modal__description');
  const featureList = modal.querySelector('.feature-modal__features');
  const activeImage = modal.querySelector('.feature-modal__active-image');
  const imageButton = modal.querySelector('.feature-modal__image-button');
  const previousButton = modal.querySelector('.feature-modal__step--previous');
  const nextButton = modal.querySelector('.feature-modal__step--next');
  const caption = modal.querySelector('.feature-modal__caption');
  const filters = modal.querySelector('.feature-modal__filters');
  const thumbs = modal.querySelector('.feature-modal__thumbs');
  const closeButton = modal.querySelector('.feature-modal__close');

  const getModalImages = () => Array.from(thumbs.querySelectorAll('img'));
  const getVisibleImageIndexes = () => Array.from(thumbs.querySelectorAll('button:not([hidden])'))
    .map((button) => Number(button.dataset.imageIndex));

  const updateFeatureFilters = () => {
    filters.querySelectorAll('button').forEach((button) => {
      const isSelected = button.dataset.group === featureModalState.activeGroup;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });

    thumbs.querySelectorAll('button').forEach((button) => {
      const shouldShow = featureModalState.activeGroup === 'All'
        || button.dataset.group === featureModalState.activeGroup;
      button.hidden = !shouldShow;
    });
  };

  const setFeatureImage = (index) => {
    const project = featureModalState.project;
    if (!project) {
      return;
    }

    featureModalState.selectedImage = (index + project.images.length) % project.images.length;
    const [src, alt] = project.images[featureModalState.selectedImage];
    activeImage.src = src;
    activeImage.alt = alt;
    caption.textContent = `${featureModalState.selectedImage + 1} / ${project.images.length} · ${alt}`;

    thumbs.querySelectorAll('button').forEach((button, buttonIndex) => {
      const isSelected = buttonIndex === featureModalState.selectedImage;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-current', String(isSelected));
    });
  };

  const stepFeatureImage = (direction) => {
    const visibleIndexes = getVisibleImageIndexes();
    if (!visibleIndexes.length) {
      return;
    }

    const currentVisibleIndex = visibleIndexes.indexOf(featureModalState.selectedImage);
    const fallbackIndex = direction > 0 ? 0 : visibleIndexes.length - 1;
    const nextVisibleIndex = currentVisibleIndex >= 0
      ? (currentVisibleIndex + direction + visibleIndexes.length) % visibleIndexes.length
      : fallbackIndex;

    setFeatureImage(visibleIndexes[nextVisibleIndex]);
  };

  const setFeatureGroup = (group) => {
    featureModalState.activeGroup = group;
    updateFeatureFilters();

    const visibleIndexes = getVisibleImageIndexes();
    if (visibleIndexes.length && !visibleIndexes.includes(featureModalState.selectedImage)) {
      setFeatureImage(visibleIndexes[0]);
    } else {
      setFeatureImage(featureModalState.selectedImage);
    }
  };

  const closeFeatureModal = () => {
    modal.classList.remove('is-open');
    modal.hidden = true;
    document.body.classList.remove('is-feature-modal-open');

    if (featureModalState.shouldRestoreFocus && featureModalState.lastFocusedElement) {
      featureModalState.lastFocusedElement.focus();
    } else if (featureModalState.lastFocusedElement) {
      featureModalState.lastFocusedElement.blur();
    }
  };

  const openFeatureModal = (projectKey, shouldRestoreFocus = false) => {
    const project = featureProjects[projectKey];
    if (!project) {
      return;
    }

    featureModalState.project = project;
    featureModalState.lastFocusedElement = document.activeElement;
    featureModalState.shouldRestoreFocus = shouldRestoreFocus;
    title.textContent = project.title;
    description.textContent = project.description;
    featureList.replaceChildren();
    filters.replaceChildren();
    thumbs.replaceChildren();
    featureModalState.activeGroup = 'All';

    project.features.forEach((group) => {
      const groupEl = document.createElement('div');
      const groupTitle = document.createElement('h3');
      const list = document.createElement('ul');

      groupTitle.textContent = group.label;
      group.items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
      });

      groupEl.className = 'feature-modal__feature-group';
      groupEl.append(groupTitle, list);
      featureList.append(groupEl);
    });

    const imageGroups = project.images.map(([src, alt]) => getFeatureImageGroup(src, alt));
    const availableGroups = Array.from(new Set(['All', ...imageGroups])).sort((groupA, groupB) => {
      const indexA = featureImageGroupOrder.indexOf(groupA);
      const indexB = featureImageGroupOrder.indexOf(groupB);
      return (indexA === -1 ? featureImageGroupOrder.length : indexA)
        - (indexB === -1 ? featureImageGroupOrder.length : indexB);
    });

    availableGroups.forEach((group) => {
      const button = document.createElement('button');
      button.className = 'feature-modal__filter';
      button.type = 'button';
      button.dataset.group = group;
      button.setAttribute('aria-pressed', String(group === featureModalState.activeGroup));
      button.textContent = getFeatureGroupLabel(group);
      button.addEventListener('click', () => setFeatureGroup(group));
      filters.append(button);
    });

    project.images.forEach(([src, alt], imageIndex) => {
      const button = document.createElement('button');
      const image = document.createElement('img');
      const label = document.createElement('span');
      const group = imageGroups[imageIndex];

      button.className = 'feature-modal__thumb';
      button.type = 'button';
      button.dataset.group = group;
      button.dataset.imageIndex = String(imageIndex);
      button.setAttribute('aria-label', copy.showImage(alt));
      image.src = src;
      image.alt = alt;
      image.loading = 'lazy';
      label.className = 'feature-modal__thumb-label';
      label.textContent = alt;

      button.append(image, label);
      button.addEventListener('click', () => setFeatureImage(imageIndex));
      thumbs.append(button);
    });

    updateFeatureFilters();
    setFeatureImage(0);
    modal.hidden = false;
    document.body.classList.add('is-feature-modal-open');
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      closeButton.focus();
    });
  };

  if (modal.dataset.handlersReady !== 'true') {
    closeButton.addEventListener('click', closeFeatureModal);
    modal.addEventListener('click', (event) => {
      if (!panel.contains(event.target)) {
        closeFeatureModal();
      }
    });
    imageButton.addEventListener('click', () => {
      if (window.openPreviewLightbox) {
        window.openPreviewLightbox(getModalImages(), featureModalState.selectedImage);
      }
    });
    previousButton.addEventListener('click', () => {
      stepFeatureImage(-1);
    });
    nextButton.addEventListener('click', () => {
      stepFeatureImage(1);
    });

    window.addEventListener('keydown', (event) => {
      if (modal.hidden) {
        return;
      }

      if (document.body.classList.contains('is-lightbox-open')) {
        return;
      }

      if (event.key === 'Escape') {
        closeFeatureModal();
      }

      if (event.key === 'ArrowLeft') {
        stepFeatureImage(-1);
      }

      if (event.key === 'ArrowRight') {
        stepFeatureImage(1);
      }
    }, true);

    modal.dataset.handlersReady = 'true';
  }

  projectCards.forEach((card) => {
    if (card.dataset.featureHandlersReady === 'true') {
      return;
    }

    const openFromCard = (event) => {
      const interactiveTarget = event.target.closest('button, a, .preview-gallery__controls');
      if (interactiveTarget) {
        return;
      }

      openFeatureModal(card.dataset.featureProject, false);
    };

    card.addEventListener('click', openFromCard);
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      openFeatureModal(card.dataset.featureProject, true);
    });
    card.dataset.featureHandlersReady = 'true';
  });
}

initPreviewGalleries();
initPreviewLightbox();
initFeatureModal();
window.initPreviewGalleries = initPreviewGalleries;
window.initPreviewLightbox = initPreviewLightbox;
window.initFeatureModal = initFeatureModal;
