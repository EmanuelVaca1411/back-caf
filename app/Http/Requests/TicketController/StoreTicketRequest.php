<?php

namespace App\Http\Requests\TicketController;

use Illuminate\Foundation\Http\FormRequest;

class StoreTicketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'participants' => 'required|array|min:1',
            'participants.*.id' => 'required|integer|exists:participants,id',
            'amount' => 'required|numeric',
            'type_payment_id' => 'required|integer|exists:type_payments,id',
        ];
    }
}
