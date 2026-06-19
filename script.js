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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
  'majelis-kopi': {
    title: 'Majelis Kopi Sales & Inventory Management System',
    description: 'Coffee shop operations system for Majelis Kopi covering POS transactions, menu and raw-material inventory, suppliers, cashier attendance and payroll, asset tracking, customer management, and operational reports.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
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

const featureModalState = {
  project: null,
  selectedImage: 0,
  lastFocusedElement: null,
  shouldRestoreFocus: false,
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
    previousButton.setAttribute('aria-label', 'Previous preview');
    previousButton.innerHTML = `
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    `;

    nextButton.className = 'preview-gallery__control';
    nextButton.type = 'button';
    nextButton.setAttribute('aria-label', 'Next preview');
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
    lightbox.setAttribute('aria-label', 'Project preview image');
    lightbox.innerHTML = `
      <button class="preview-lightbox__close" type="button" aria-label="Close preview">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <button class="preview-lightbox__nav preview-lightbox__nav--previous" type="button"
        aria-label="Previous preview">
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
        aria-label="Next preview">
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
    const altText = selectedImage.getAttribute('alt') || 'Project preview image';
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

      const altText = galleryImage.getAttribute('alt') || 'project preview image';
      const isInactiveSlideshowImage = gallery.classList.contains('is-slideshow')
        && !galleryImage.classList.contains('is-active');

      galleryImage.dataset.lightboxReady = 'true';
      galleryImage.tabIndex = isInactiveSlideshowImage ? -1 : 0;
      galleryImage.setAttribute('role', 'button');
      galleryImage.setAttribute('aria-label', `Open ${altText} full view`);

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
        <button class="feature-modal__close" type="button" aria-label="Close feature view">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div class="feature-modal__body">
          <section class="feature-modal__summary" aria-label="Project feature summary">
            <p class="feature-modal__eyebrow">Screenshot preview</p>
            <h2 id="feature-modal-title"></h2>
            <p class="feature-modal__description"></p>
            <p class="feature-modal__availability"></p>
            <div class="feature-modal__features"></div>
          </section>
          <section class="feature-modal__gallery" aria-label="Project screenshots">
            <figure class="feature-modal__active-preview">
              <div class="feature-modal__image-shell">
                <button class="feature-modal__step feature-modal__step--previous" type="button"
                  aria-label="Previous feature screenshot">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button class="feature-modal__image-button" type="button" aria-label="Open selected screenshot full view">
                  <img class="feature-modal__active-image" alt="" />
                </button>
                <button class="feature-modal__step feature-modal__step--next" type="button"
                  aria-label="Next feature screenshot">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <figcaption class="feature-modal__caption"></figcaption>
            </figure>
            <div class="feature-modal__thumbs" aria-label="Screenshot thumbnails"></div>
          </section>
        </div>
      </div>
    `;
    document.body.append(modal);
  }

  const panel = modal.querySelector('.feature-modal__panel');
  const title = modal.querySelector('#feature-modal-title');
  const description = modal.querySelector('.feature-modal__description');
  const availability = modal.querySelector('.feature-modal__availability');
  const featureList = modal.querySelector('.feature-modal__features');
  const activeImage = modal.querySelector('.feature-modal__active-image');
  const imageButton = modal.querySelector('.feature-modal__image-button');
  const previousButton = modal.querySelector('.feature-modal__step--previous');
  const nextButton = modal.querySelector('.feature-modal__step--next');
  const caption = modal.querySelector('.feature-modal__caption');
  const thumbs = modal.querySelector('.feature-modal__thumbs');
  const closeButton = modal.querySelector('.feature-modal__close');

  const getModalImages = () => Array.from(thumbs.querySelectorAll('img'));

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
    availability.textContent = project.availability;
    featureList.replaceChildren();
    thumbs.replaceChildren();

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

    project.images.forEach(([src, alt], imageIndex) => {
      const button = document.createElement('button');
      const image = document.createElement('img');

      button.className = 'feature-modal__thumb';
      button.type = 'button';
      button.setAttribute('aria-label', `Show ${alt}`);
      image.src = src;
      image.alt = alt;
      image.loading = 'lazy';

      button.append(image);
      button.addEventListener('click', () => setFeatureImage(imageIndex));
      thumbs.append(button);
    });

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
      setFeatureImage(featureModalState.selectedImage - 1);
    });
    nextButton.addEventListener('click', () => {
      setFeatureImage(featureModalState.selectedImage + 1);
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
        setFeatureImage(featureModalState.selectedImage - 1);
      }

      if (event.key === 'ArrowRight') {
        setFeatureImage(featureModalState.selectedImage + 1);
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
