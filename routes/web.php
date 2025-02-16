<?php

use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Ticket\TicketController;
use App\Http\Controllers\Public\TicketController as PublicTicketController;
use App\Http\Controllers\Ticket\TicketPaymentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PublicTicketController::class, 'index'])->name('tickets.index');

// Route::get('/tickets/create', [PublicTicketController::class, 'create'])->name('tickets.create');

// Route::get('/admin/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('admin.dashboard');

// Route::middleware('auth')->group(function () {
//     Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
//         // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//         // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//         // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

//         // Route::group(['prefix' => 'tickets', 'as' => 'tickets.', 'controller' => TicketController::class], function () {
//         //     Route::get('/', 'index')->name('index');
//         //     Route::get('/create', 'create')->name('create');
//         //     Route::post('/', 'store')->name('store');
//         //     Route::get('/edit/{id}', 'edit')->name('edit');
//         // });

//         // Route::group(['prefix' => 'ticket-payments', 'as' => 'ticket-payments.', 'controller' => TicketPaymentController::class], function () {
//         //     Route::post('/', 'store')->name('store');
//         // });

//         // Route::group(['prefix' => 'participants', 'as' => 'participants.', 'controller' => ParticipantController::class], function () {
//         //     Route::get('/', 'index')->name('index');
//         //     Route::post('/', 'store')->name('store');
//         // });
//     });
// });

require __DIR__ . '/auth.php';
