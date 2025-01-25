<?php

namespace Tests\Unit\Service;

use App\Dtos\Ticket\TypePaymentDto;
use App\Models\TypePayment;
use App\Services\Ticket\TypePaymentService;
use PHPUnit\Framework\TestCase;

class TypePaymentServiceTest extends TestCase
{
    public function test_create_type_payment()
    {
        $typePaymentService = new TypePaymentService();

        $typePaymentDto = new TypePaymentDto('Qr', 'Pagos con código QR');

        $typePayment = $typePaymentService->create($typePaymentDto);

        $this->assertInstanceOf(TypePayment::class, $typePayment);
    }
}
